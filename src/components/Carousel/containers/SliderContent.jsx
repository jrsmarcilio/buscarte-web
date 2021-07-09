/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";

import slideImages from "./SlideImages";
import * as Styled from "../styled";

const SliderContent = (props) => {
  return (
    <Styled.SlidesContent>
      {slideImages.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "inactive"}
        >
          <span className="sombreamento">
            {/* <h2>{slide.title}</h2> */}
          </span>
          <img src={slide.urls} alt="" />
        </div>
      ))}
    </Styled.SlidesContent>
  );
};

export default SliderContent;
