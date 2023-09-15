import { Attachment } from "airtable";
import { base, getImgUrlFromAttachmentObj } from "./airtable";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  conference: string;
  year: number;
  link: string;
  award: string;
};

export async function fetchPublications(): Promise<Publication[]> {
  return new Promise((resolve, reject) => {
    const results: Publication[] = [];

    base("Publications")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            results.push({
              id: record.id,
              title: (record.get("Title") as string) ?? "",
              authors: (record.get("Authors") as string) ?? "",
              conference:
                (record.get(
                  "Conference/Journal/Workshop Venue name (Abbreviated)"
                ) as string) ?? "",
              year: (record.get("Year") as number) ?? "",
              link: (record.get("Website Link") as string) ?? "",
              award: (record.get("Award") as string) ?? "",
            });
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) {
            console.error(err);
            reject(err);
          }
          resolve(results);
        }
      );
  });
}
