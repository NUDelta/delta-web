import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

import image1 from "./assets/home-1.jpg";
import image2 from "./assets/home-2.jpg";
import image3 from "./assets/home-3.jpg";
import image4 from "./assets/home-4.jpg";

export default function Slides(): JSX.Element {
  return (
    <div>
      <Carousel
        showThumbs={false}
        swipeable={true}
        autoPlay={true}
        showStatus={false}
        infiniteLoop={true}
      >
        <div>
          <Image src={image1} alt="Screenshot of Zoom call with all lab members." layout="responsive" />
        </div>

        <div>
          <Image src={image2} alt="Lab meeting in a glass fishbowl-like room overlooking a machine shop." layout="responsive" />
        </div>

        <div>
          <Image src={image3} alt="Lab members collaborating with post-it notes in a glass fishbowl-like room." layout="responsive" />
        </div>

        <div>
          <Image src={image4} alt="Lab members in Delta Lab hoodies." layout="responsive" />
        </div>
      </Carousel>

    </div>
  );
}
