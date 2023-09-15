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
        <div className="max-w-4xl mx-auto">
          <Image
            src={BannerImg}
            alt="Lab members doing Pair Research with each other."
            className="responsive"
          />
          <h2 className="text-3xl font-normal border-b-2 border-dark-orange pb-2 mt-4">
            Work. Play. Design. Learn.
          </h2>
          <div className="prose prose-lg max-w-none mt-4 mb-8">
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
