import Image from "next/image";

import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import HowWeWorkList from "../components/how-we-work/HowWeWorkList";

import BannerImg from "../components/how-we-work/assets/pair-research.jpg";

export default function ValuesApproach(): JSX.Element {
  return (
    <div>
      <Header />

      <Container className="mt-8">
        <div className="mx-auto max-w-4xl">
          <Image
            src={BannerImg}
            alt="Lab members doing Pair Research with each other."
            className="responsive"
          />
          <h2 className="mt-4 border-b-2 border-dark-orange pb-2 text-3xl font-normal">
            Work. Play. Design. Learn.
          </h2>
          <div className="prose prose-lg mb-8 mt-4 max-w-none">
            <p>
              The Delta Lab is an interdisciplinary, supportive, collaborative
              community of researchers focused on solving critical problems in
              the world through research. We come from a variety of disciplines
              -- human-computer interaction, learning sciences, design, computer
              science, psychology, and organizational behavior -- to publish
              design-based research in our respective fields. Our supportive
              community enables students to gain experience leading projects and
              publishing as first authors in top-tier venues. Through this
              experience, students become self-directed designers, researchers,
              and mentors who are well-positioned to become leading experts in
              their respective fields.
            </p>
          </div>

          <HowWeWorkList />
        </div>
      </Container>
    </div>
  );
}
