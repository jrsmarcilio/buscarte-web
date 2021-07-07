import React, { memo, useState, useEffect } from "react";

import Header from "../../components/Header";
import Artista from "../../components/Perfil/Artista";
import Titulo from "../../components/Titulos";

import api from "../../services/api";

import { Container, ContentChildren } from "./styles";

const PerfilArtista = (props) => {
  const [artista, setArtista] = useState([]);

  useEffect(() => {
    async function fetchArtista() {
      const response = await api.get(props.location.pathname);
      response ? setArtista(response.data) : setArtista([]);
    }

    fetchArtista();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Titulo title="Artista" />

        <ContentChildren>
          <Artista artista={artista} />
        </ContentChildren>

        <Titulo title="Obras do Artista" />
      </Container>
    </>
  );
};

export default memo(PerfilArtista);
