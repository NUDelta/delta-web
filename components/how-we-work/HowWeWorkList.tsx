import Image, { StaticImageData } from "next/image";

import CommunityImg from "./assets/community.jpg";
import ProblemSolvingImg from "./assets/problem-solving.jpg";
import TrainingImg from "./assets/training.jpg";

export default function HowWeWorkList(): JSX.Element {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <style>{`
        .section-header {
          margin: 0;
        }
      `}</style>

      {sections.map((section, i) => (
        <div key={i}>
          <h2 className="text-2xl border-b border-black font-normal mb-4">
            {section.title}
          </h2>
          <div
                key={`${i}-inner`}
                className={`flex flex-col gap-4 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="w-full md:w-1/2">
                          <Image
                              src={section.imagePath}
                              alt={section.title}
                              layout="responsive"
                          />
                </div>
                <div className="w-full md:w-1/2">
                {section.subsections.map((subsection, j) => (
                  <div
                    key={`subsection-${i}-${j}`}
                  >
                    <div className="prose mb-4">
                        <h3 className="section-header">{subsection.title}</h3>
                        {subsection.description}
                   </div>
                </div>
            ))}
                </div>
          </div>
        </div>
      ))}
    </div>
  );
}

type SubSection = {
  title: string;
  description: JSX.Element;
};

type Section = {
  title: string;
  subsections: SubSection[];
  imagePath: StaticImageData;
};

const sections: Section[] = [
  {
    title:
      "We are an interdisciplinary community working on solving hard problems.",
    subsections: [
      {
        title: "Interdisciplinary Problem Solving",
        description: (
          <>
            We work on solving tough real-world problems by conducting interdisciplinary research using methods and theories from human computer interaction, learning sciences, computer science, psychology, organizational behavior, and design.
          </>
        ),
      },
      {
        title: "University-Wide Collaborations",
        description: (
          <>
            We collaborate with one another as well as students and faculty from across the university (e.g., psychology, communications, mechanical engineering).
          </>
        ),
      },
      {
        title: "Publishing in Top-Tier Journals and Conferences",
        description: (
          <>
            We publish papers that make substantial contributions to a variety of academic disciplines and practical problems.
          </>
        ),
      },
    ],
    imagePath: ProblemSolvingImg,
  },
  {
    title: "We train students to be self-directed designers, researchers, and mentors.",
    subsections: [
      {
        title: "Goal Setting",
        description: (
          <>
            We set goals at the beginning of each quarter to hold each other accountable. We also do regular sprint planning -- identifying tasks to accomplish goals and planning how to complete within sprint constraints.
          </>
        ),
      },
      {
        title: "Methodologies & Modeling",
        description: (
          <>
            We teach conceptual models of research and rigorous methodologies to help strengthen our expertise (e.g., design arguments, research canvases, synthesis trees, causal models). We help students develop theories of change that drive their research agenda.
          </>
        ),
      },
      {
        title: "Reflection & Growth",
        description: (
          <>
            We conduct regular self-assessments and follow-up meetings, emphasizing on not only project growth but personal growth.
          </>
        ),
      },
    ],
    imagePath: TrainingImg,
  },
  {
    title: "We are a supportive, collaborative, and playful community.",
    subsections: [
      {
        title: "Help and Collaboration",
        description: (
          <>
            We provide coordinated opportunities, such as <a href="https://www.pairresearch.io/" target="_blank" rel="noreferrer">Pair Research</a> to exchange work with other students and faculty to get help on work. Students receive regular feedback and help from interdisciplinary faculty and students. The lab community is large (30+ people) and students never feel alone.
          </>
        ),
      },
      {
        title: "Lab Meetings",
        description: (
          <>
            We meet twice a week as a lab, providing students opportunities to share their research and get feedback from the lab community. At our meetings we share our “likes” and learn more about one another.
          </>
        ),
      },
      {
        title: "Supportive, Colorful Working Spaces",
        description: (
          <>
            Our lab has three group working spaces to support different types of meetings and work: (1) one lively office, (2) one group meeting space, (3) one quiet workspace. Students can select where to work each day and are given a desk of their own, as well. We are known to have one of the most comfortable physical spaces for collaboration and working of all the labs here!
          </>
        ),
      },
      {
        title: "Community Gatherings",
        description: (
          <>
            Every quarter, we host community potluck dinners at faculty homes. The potlucks carve out time for us to genuinely support and get to know one another. We also gather together on campus for communal coffee and lunch breaks, because we like spending time together!
          </>
        ),
      },
    ],
    imagePath: CommunityImg,
  },
];
