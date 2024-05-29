import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import ReactMarkdown from "react-markdown";
import TeamMembers from "../components/people/TeamMembers";
import { fetchResearchAreas, ResearchArea } from "../lib/researchAreas";
import Image from "next/image";

interface ProjectProps {
  researchAreas: ResearchArea[];
}

export default function Projects({ researchAreas }: ProjectProps): JSX.Element {
  return (
    <div>
      <Header />

      <Container className="mt-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Research Area component */}
          {researchAreas.map((researchArea) => (
            <div key={researchArea.id} className="bg-gray-50 p-8">
              {/* Research Area name */}
              <h2 className="mb-4 text-3xl font-semibold">
                {researchArea.name}
              </h2>

              {/* Research Area banner image */}
              {researchArea.banner_image && (
                <Image
                  src={researchArea.banner_image}
                  alt={researchArea.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }} // optional
                />
              )}

              {/* Research Area description */}
              <ReactMarkdown className="prose-lg my-4">
                {researchArea.description}
              </ReactMarkdown>

              {/* Members of Research Area */}
              <div className="w-full">
                <h2 className="mb-2 border-b border-black pb-2 text-2xl font-bold">
                  Team
                </h2>

                <TeamMembers
                  groupId={researchArea.id}
                  members={researchArea.members}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const researchAreas = await fetchResearchAreas();

  return {
    props: {
      researchAreas: researchAreas,
    },
  };
}
