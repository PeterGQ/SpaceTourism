import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//import { ArrowRightCircle } from "react-bootstrap-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Station } from "./Station";
import { ImageSlider } from "./ImageSlider";
import station1 from "../assets/EarthStation.jpg";
import station2 from "../assets/MoonStation.jpg";
import station3 from "../assets/MarsStation.jpg";
import station4 from "../assets/VenusStation.jpg";
import station5 from "../assets/JupiterStation.jpg";
import station6 from "../assets/SaturnStation.jpg";
import view1 from "../assets/view1.jpg";
import view2 from "../assets/view2.jpg";
import view3 from "../assets/view3.jpg";
import view4 from "../assets/view4.jpg";
import view5 from "../assets/view5.jpg";
import view6 from "../assets/view6.jpg";
import view7 from "../assets/view7.jpg";

export const Banner = () => {
  const IMAGES = [view1, view2, view3, view4, view5, view6, view7];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const STATIONS = [
    {
      productimage: station1,
      Title: "Celestial Citadel",
      planet: "Earth",
      review: '"The station is pretty cool!"',
    },
    {
      productimage: station2,
      Title: "Lunar Lighthouse",
      planet: "The Moon",
      review: '"The views are out of this World!"',
    },
    {
      productimage: station3,
      Title: "Red Horizon Habitat",
      planet: "Mars",
      review: '"Great for thrill-seekers who do not mind a bit of dust!"',
    },
    {
      productimage: station4,
      Title: "Solar Flare Haven",
      planet: "Venus",
      review:
        '" Sizzling temperatures, breathtaking acid rain, and stunning cloudscapes. Bring your SPF 10,000!"',
    },
    {
      productimage: station5,
      Title: "Gas Giant Gateway",
      planet: "Jupiter",
      review:
        '"Majestic storms, swirling clouds, and a vibrant personality. A must-see for those who dream big."',
    },
    {
      productimage: station6,
      Title: "Titan Tether Station",
      planet: "Saturn",
      review:
        '" Stunning rings, dazzling moons, and a timeless charm. A celestial destination for those with an eye for beauty."',
    },
  ];
  const product = STATIONS.map((item) => <Station data={item} />);
  return (
    <div>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="box1">
                <span className="tagline">Welcome to the future</span>
                <h1>
                  {`Space Tourism `}
                  <span className="tagline">futuristic</span>
                </h1>
                <p color="black">
                  This is the future of travel, a real time view of 50 years
                  into the future(my guess). Embark on an extraordinary journey
                  beyond the bounds of our home planet with our immersive
                  exploration into the cosmos. Welcome to our Space Tourism
                  platform, where the realms of science fiction meet reality,
                  and the dream of venturing beyond Earth's atmosphere becomes
                  an attainable adventure. Discover a portal to the cosmos,
                  where cutting-edge technology converges with the human
                  spirit's inherent curiosity, offering you the chance to
                  transcend the ordinary and experience the wonders of space
                  firsthand. Join us as we pave the way for a new era of
                  exploration, making the cosmos not just a distant spectacle,
                  but a destination within reach for those who dare to dream.
                  Your odyssey to the stars begins here.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div
        className="journey"
        style={{
          maxWidth: "2000px",
          width: "100%",
          height: "1000px",
        }}
      >
        <h1 className="h1">Stars are the limit</h1>
        <ImageSlider className="work" images={IMAGES} />
        <h5>
          Embark on an out-of-this-world family adventure with our space tourism
          experience specially crafted to ignite the curiosity of explorers
          young and old! Picture floating in space, surrounded by the magical
          glow of distant stars and the beauty of our home planet from above.
          It's not just a vacation; it's a cosmic playground where families can
          create unforgettable memories together. From the thrill of
          weightlessness to the wonder of celestial sights, our space tours
          promise an enchanting journey that will captivate the imaginations of
          the young dreamers and inspire a love for the cosmos. Join us for a
          celestial escapade where learning meets excitement, and every moment
          is a chance to discover the marvels of space. Your family's cosmic
          adventure begins here — a once-in-a-lifetime opportunity to explore
          the universe together, making bonds that are truly out of this world!
          🚀🌌
        </h5>
      </div>
      <div className="times1">
        <h1>Explore The Galaxy</h1>
        <Carousel responsive={responsive}>{product}</Carousel>
      </div>
    </div>
  );
};
