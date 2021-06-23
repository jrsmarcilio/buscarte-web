import React, { useState, useEffect } from "react";

import Artistas from "../components/Artistas";
import Divider from "../components/Divider";
import api from "../services/api";

import { Container } from "./styles";

const Artists = () => {
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
    <Container>
      <Divider />
      <Artistas artistas={artistas} />
    </Container>
  );
};

export default Artists;
