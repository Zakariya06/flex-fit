import React from "react";
import { Carousel } from "react-bootstrap";
import slider_1 from "@/public/assets/sign_slide_1.png";
import Image from "next/image";

function PageSlider() {
  return (
    <div className="PageSlider">
      <Carousel className="pageCarousel" controls={false}>
        <Carousel.Item>
          <Image
            src={slider_1}
            alt="Start your journey "
            className="pageSliderImage" 
          />
          <Carousel.Caption>
            <h3 className="mdHeading">
              Start your journey towards a more active lifestyle
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={slider_1}
            alt="Start your journey "
            className="pageSliderImage" 
          />
          <Carousel.Caption>
            <h3 className="mdHeading">
              Start your journey towards a more active lifestyle
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src={slider_1}
            alt="Start your journey "
            className="pageSliderImage" 
          />
          <Carousel.Caption>
            <h3 className="mdHeading">
              Start your journey towards a more active lifestyle
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PageSlider;
