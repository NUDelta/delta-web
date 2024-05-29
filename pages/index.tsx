import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import Slides from "../components/home/Slides";
import HomeIntro from "../components/home/HomeIntro";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />

      <Container className="mt-4">
        <div className="w-full md:w-full">
          <Slides />
        </div>
        <h2 className="mt-4 border-b-2 border-dark-orange pb-2 text-3xl font-medium">
          Delta Lab
        </h2>
      </Container>

      <Container className="mt-4 flex flex-col gap-6 md:flex-row">
        <div className="w-full">
          <HomeIntro />
        </div>
      </Container>
    </div>
  );
}
