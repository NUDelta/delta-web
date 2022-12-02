import Header from "../components/shared/Header";
import Container from "../components/shared/Container";
import Slides from "../components/home/Slides";
import HomeIntro from "../components/home/HomeIntro";
import { Timeline } from "react-twitter-widgets";

import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div>
      <Header />

      <Container className="mt-4">
        <div className="w-full md:w-full">
          <Slides />
        </div>
        <h2 className="text-3xl font-medium border-b-2 border-dark-orange pb-2 mt-4">
          Delta Lab
        </h2>
      </Container>

      <Container className="flex flex-col md:flex-row gap-6 mt-4">
       <div className="w-full md:w-1/2">
          <HomeIntro />
        </div>

        <div className="w-full md:w-1/2">
          <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: "DeltaLabNU"
          }}
          options={{
            height: '750'
          }}
          />
        </div>
      </Container>
    </div>
  );
}
