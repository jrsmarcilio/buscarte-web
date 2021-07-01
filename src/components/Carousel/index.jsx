/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import ArrowsComponent from "./containers/Arrows";
import DotsComponent from "./containers/Dots";

import SlideImages from "./containers/SlideImages";
import SlideContentComponent from "./containers/SliderContent";

import * as Styled from "./styled";

const len = SlideImages.length - 1;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Styled.CarouselContainer>
      <SlideContentComponent activeIndex={activeIndex} />
      <ArrowsComponent
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <DotsComponent
        activeIndex={activeIndex}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </Styled.CarouselContainer>
  );
};

export default Carousel;
