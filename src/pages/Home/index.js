import React, { memo, useState, useEffect } from "react";

import Artistas from "../../components/Artistas";
// import Divider from "../../components/Divider";
import api from "../../services/api";

import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import GoogleMaps from "../../components/GoogleMaps";

import { Container } from "../styles";

const Home = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    async function fetchAtelie() {
      const response = await api.get("/artistas");
      if (response.data === null) return console.error(new Error());
      setArtistas(response.data);
    }
    fetchAtelie();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <Carousel />
        <GoogleMaps />
      </Container>

      <Container>
        <Artistas artistas={artistas} />
      </Container>
    </>
  );
};

export default memo(Home);
