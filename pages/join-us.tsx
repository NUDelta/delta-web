import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import Link from "next/link";

export default function Apply(): JSX.Element {
  return (
    <div>
      <Header />

      <Container className="mt-8">
        <div className="prose mx-auto max-w-4xl">
          <h2 className="mt-4 border-b-2 border-dark-orange pb-2 text-3xl font-normal">
            Graduate Research
          </h2>
          <p>
            The primary goal of the Delta Lab is to teach people how to be
            outstanding designers and researchers capable of building excellent
            theory and eloquent systems. To achieve this goal, Delta Lab faculty
            work closely with a tightly knit cohort of doctoral students who
            have access to Northwestern&apos;s entire human computer interaction
            community, which is one of the largest in the country. Students take
            classes in Computer Science, Engineering, Design, Education and
            Social Policy, Communities, Management, and Journalism to build a
            unique perspective on technology and social behavior. Upon
            graduation, students push the boundaries of scholarship as
            professors at universities and researchers in industry labs and
            develop radically new technologies as designers and entrepreneurs in
            the tech industry.
          </p>

          <p>
            Students interested in joining the Delta Lab come from diverse
            backgrounds including Computer Science, Anthropology, and Learning
            Sciences. Students with interests in social computing,
            crowdsourcing, HCI, design, AI, machine learning, learning sciences,
            decision science, and organizational behavior can all find good
            fits. The ideal students are those who thrive at the intersections
            of disciplines. Those interested in joining the Delta Lab should
            apply through one of the following doctoral programs:
          </p>

          <ul>
            <li>
              <a
                href="https://tsb.northwestern.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Technology and Social Behavior Program
              </a>
            </li>
            <li>
              <a
                href="https://www.mccormick.northwestern.edu/computer-science/"
                target="_blank"
                rel="noreferrer"
              >
                Computer Science
              </a>
            </li>
            <li>
              <a
                href="https://www.sesp.northwestern.edu/learning-sciences/"
                target="_blank"
                rel="noreferrer"
              >
                Learning Sciences
              </a>
            </li>
            <li>
              <a
                href="https://csls.sesp.northwestern.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Computer Science + Learning Science
              </a>
            </li>
            <li>
              <a
                href="https://www.mccormick.northwestern.edu/mechanical/"
                target="_blank"
                rel="noreferrer"
              >
                Mechanical Engineering
              </a>
            </li>
            <li>
              <a
                href="https://mts.northwestern.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Media, Technology, and Society
              </a>
            </li>
          </ul>

          <p>
            Admissions decisions are based on the overall academic record,
            letters of recommendation, work and research experience, and match
            with faculty research interests. Other considerations include the
            quality of the school attended, Graduate Record Exam scores (GRE),
            and grade point averages (GPA). To apply, you must use the online
            application form at{" "}
            <a
              href="http://www.tgs.northwestern.edu/admission/index.html"
              target="_blank"
              rel="noreferrer"
            >
              The Graduate School
            </a>{" "}
            web site. To access the online application, go to The Graduate
            School Admission page, and click on the &quot;Apply Online&quot;
            link.
          </p>

          <h2 className="mt-4 border-b-2 border-dark-orange pb-2 text-3xl font-normal">
            Undergraduate Research
          </h2>
          <p>
            We love to work with highly-motivated undergraduate students as they
            provide fresh perspective into the problems we are trying to solve.
            Many undergraduate students working in the Delta Lab participate
            through the{" "}
            <a
              href="https://dtr.northwestern.edu/"
              target="_blank"
              rel="noreferrer"
            >
              Design, Technology, and Research (DTR)
            </a>{" "}
            program. If DTR is not a good fit for you, you are welcome to email
            the faculty member with whom you&apos;d like to work directly;
            please include your resume and transcript in your email. You can
            also reach us at{" "}
            <a href="mailto:delta@listserv.it.northwestern.edu">
              delta@listserv.it.northwestern.edu
            </a>
            .
          </p>
          <p>
            Please note that a prerequisite for joining the Delta Lab is having
            taken and excelled in a design, learning science, or computer
            science class.
          </p>

          <h2 className="mt-4 border-b-2 border-dark-orange pb-2 text-3xl font-normal">
            Industry Collaborators
          </h2>
          <p>
            Delta Lab engages with industry through academic partnerships and
            sponsorship.
          </p>
          <p>
            <b className="font-extrabold">Academic partners</b> are actively
            involved with teaching and research programs. Partnerships are
            established based on shared interest in specific issues at the
            intersection of behavioral science, learning, and technology.
            Partners may participate as a research site, attend our speaker
            series, receive working papers, and attend partner workshops.
          </p>
          <p>
            <b className="font-extrabold">Sponsors</b> receive the benefits of
            partnership but in addition, they work closely with the Delta Lab
            faculty to develop a program of applied research.
          </p>
        </div>
      </Container>
    </div>
  );
}
