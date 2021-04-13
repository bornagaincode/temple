import React from "react";
import Slider from "../slider/Slider";
import "./PageSlider.scss";
import slider_image_01 from "./slides/SlideImage01.jpg";
import slider_image_02 from "./slides/SlideImage02.jpg";
import slider_image_03 from "./slides/SlideImage03.jpg";
import slider_image_04 from "./slides/SlideImage04.jpg";
import slider_image_05 from "./slides/SlideImage05.jpg";
import slider_image_06 from "./slides/SlideImage06.jpg";
import slider_image_07 from "./slides/SlideImage07.jpg";
import slider_image_08 from "./slides/SlideImage08.jpg";
import slider_image_09 from "./slides/SlideImage09.jpg";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

const items = [
  <div className="slide">
    <img src={slider_image_01} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_02} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_03} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_04} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_05} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_06} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_07} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_08} alt="Church service" />
  </div>,
  <div className="slide">
    <img src={slider_image_09} alt="Church service" />
  </div>,
];

function PageSlider(): JSX.Element {
  return (
    <section className="page-slider">
      <div className="page-slider--container">
        <Slider
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls={true}
        />
      </div>
    </section>
  );
}

export default PageSlider;
