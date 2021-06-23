import React, { useState, useEffect } from "react";

import Artistas from "../components/Artistas";
import api from "../services/api";

import { Container } from "./styles";

const Artists = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    api
      .get("/artistas")
      .then((result) => {
        console.log(result.data);
        setArtistas(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Artistas artistas={artistas} />
    </Container>
  );
};

export default Artists;
