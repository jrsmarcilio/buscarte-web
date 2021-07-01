import React, { memo } from "react";

import Header from "../components/Header";
import Carousel from "../components/Carousel";
import GoogleMaps from "../components/GoogleMaps";

import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <Carousel />
      <GoogleMaps />
    </Container>
  );
};

export default memo(Home);
