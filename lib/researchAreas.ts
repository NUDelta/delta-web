import { Attachment } from "airtable";
import { base, getImgUrlFromAttachmentObj } from "./airtable";
import { Person, PartialPerson, fetchPeople, sortPeople } from "./people";

export type ResearchArea = {
  id: string;
  name: string;
  description: string;
  banner_image: string | null;
  members: PartialPerson[];
};

export async function fetchResearchAreas(): Promise<ResearchArea[]> {
  return new Promise(async (resolve, reject) => {
    // pre-fetch people
    const people = await fetchPeople();

    // get research areas
    const results: ResearchArea[] = [];
    base("Research Areas")
      .select({
        view: "Grid view",
      })
      .eachPage(
        async function page(records, fetchNextPage) {
          // parse out info for each record
          for (const record of records) {
            // get faculty and students
            const facultyMentors: Person[] = people.filter((person) => {
              return (
                (record.get("faculty_mentor") as string[]) ?? []
              ).includes(person.id);
            });

            const students: Person[] = people.filter((person) => {
              return ((record.get("students") as string[]) ?? []).includes(
                person.id
              );
            });

            const members: Person[] = [
              ...Array.from(
                new Set(sortPeople([...facultyMentors, ...students]))
              ),
            ];

            const partialMembers: PartialPerson[] = members.map((person) => {
              return {
                id: person.id,
                name: person.name,
                role: person.role,
                status: person.status,
                profile_photo: person.profile_photo,
              };
            });

            // add results
            results.push({
              id: record.id,
              name: (record.get("name") as string) ?? "",
              description: (record.get("description") as string) ?? "",
              banner_image: getImgUrlFromAttachmentObj(
                record.get("banner_image") as Attachment[]
              ),
              members: partialMembers,
            });
          }

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
            return;
          }
          resolve(results);
        }
      );
  });
}
