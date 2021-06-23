/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";

import slideImages from "./SlideImages";
import * as Styled from "../styled";
import { Carousel } from "react-bootstrap";

const SliderContent = (props) => {
  return (
    <Styled.SlidesContent>
      {slideImages.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "inactive"}
        >
          <img src={slide.urls} alt="" />
          {/* <h3>{slide.title}</h3>
          <p>{slide.description}</p> */}
        </div>
      ))}
    </Styled.SlidesContent>
  );
};

export default SliderContent;
