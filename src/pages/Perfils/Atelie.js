import React, { memo, useState, useEffect } from "react";

import Header from "../../components/Header";
import Atelie from "../../components/Perfil/Atelie";
import Titulo from "../../components/Titulos";

import api from "../../services/api";

import { Container, ContentChildren } from "./styles";

const PerfilAtelie = (props) => {
  const [atelie, setAtelie] = useState([]);

  useEffect(() => {
    async function fetchAtelie() {
      window.scroll(0, 0);
      const response = await api.get(props.location.pathname);
      response ? setAtelie(response.data) : setAtelie([]);
    }

    fetchAtelie();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Titulo title="Ateliê de Artes" />
        <ContentChildren>
          <Atelie atelie={atelie} />
        </ContentChildren>
      </Container>
    </>
  );
};

export default memo(PerfilAtelie);
