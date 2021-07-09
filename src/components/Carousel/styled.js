import styled from "styled-components";

export const SlidesContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 25vh;

  img {
    border-radius: 5px;
    width: 100%;
    height: auto;

    position: absolute;
    object-fit: cover;
    image-rendering: auto;

    align-items: center;
    
  }

  .sombreamento {
    width: 100vw;
    height: 25vh;

    position: absolute;
    z-index: 1;
    background: rgba(10, 34, 61, 0.5);
  }

  .slides {
    /* max-width: 1360px; */
    width: 100%;
    height: 100%;
    position: relative;
    /* border-radius: 50px; */
  }

  .active {
    display: inline-block;
  }

  .inactive {
    display: none;
  }
`;

export const AllDots = styled.div`
  width: 100%;
  position: absolute;
  display: flex;

  justify-content: center;
  align-items: flex-end;
  bottom: 20px;

  .dot {
    cursor: pointer;
    height: 0.5rem;
    width: 0.5rem;
    margin: 0 5px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: inline-block;
    z-index: +1;
  }

  .active-dot,
  .dot:hover {
    background-color: #fff;
  }
`;

export const ArrowContainer = styled.div`
  span {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    padding: 1rem;
    top: 38%;
    margin-top: --3rem;
    z-index: +1;
    color: #fff;
  }

  .prev:hover,
  .next:hover {
    color: white;
    transition: all 0.5s ease-in;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 100%;
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

export const CarouselContainer = styled.div`
  width: 100%;
  height: 25vh;
  position: relative;
  overflow: hidden;

  justify-content: flex-start;
  align-items: center;

`;
