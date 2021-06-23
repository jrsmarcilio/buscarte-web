import React from "react";

import * as Styled from "../styled";

const Arrows = (props) => {
  return (
    <Styled.ArrowContainer>
      <span className="prev" onClick={props.prevSlide}> &#10094; </span>
      <span className="next" onClick={props.nextSlide}> &#10095; </span>
    </Styled.ArrowContainer>
  );
};

export default Arrows;
