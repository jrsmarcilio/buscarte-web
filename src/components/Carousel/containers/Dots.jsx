import React from "react";
import slideImages from "./SlideImages";

import * as Styled from "../styled";

function Dots(props) {
  return (
    <Styled.AllDots>
      {slideImages.map((slide, index) => (
        <span
          key={index}
          className={`${
            props.activeIndex === index ? "dot active-dot" : "dot"
          }`}
          onClick={(e) => props.onClick((e.target.value = index))}
        ></span>
      ))}
    </Styled.AllDots>
  );
}

export default Dots;
