import styled from "styled-components";

/**
 * Styles Slider Content
 */

export const SlidesContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* padding: 20px; */


  img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }

  .slides {
    /* max-width: 1360px; */
    height: 25vh;
    width: 100%;
    position: relative;
    border-radius: 50px;
  }

  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }

  h3,
  p {
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    top: 50%;
    z-index: 9;
  }

  p {
    top: 70%;
  }
`;

/**
 * Styles Dots
 */

export const AllDots = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 35%;
  justify-content: center;
  z-index: 200;

  .dot {
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: inline-block;
  }

  .active-dot,
  .dot:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

/**
 * Styles Arrows
 */

export const ArrowContainer = styled.div`
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 30%;
    width: auto;
    padding: 1rem;
    margin-top: --3rem;
    color: #fff;
  }

  .prev:hover,
  .next:hover {
    color: white;
    transition: all 0.5s ease-in;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .prev {
    left: 2%;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .next {
    right: 2%;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

/**
 * Styles Carousel Container - Slider()
 */

export const CarouselContainer = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  margin: auto;
  overflow: hidden;
`;
