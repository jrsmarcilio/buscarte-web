import React, { memo, useState, useEffect } from "react";

import Header from "../../components/Header";
import EspacoCultural from "../../components/Perfil/EspacoCultural";
import Titulo from "../../components/Titulos";

import api from "../../services/api";

import { Container, ContentChildren } from "./styles";

const PerfilEspacoCultural = (props) => {
  const [espaco, setEspaco] = useState([]);

  useEffect(() => {
    async function fetchEspaco() {
      const response = await api.get(props.location.pathname);
      response ? setEspaco(response.data) : setEspaco([]);
    }

    fetchEspaco();
  }, []);

  return (
    <>
      <Header />

      <Container>
        <Titulo title="Espaço Cultural" />
        <ContentChildren>
          <EspacoCultural espaco={espaco} />
        </ContentChildren>
      </Container>
    </>
  );
};

export default memo(PerfilEspacoCultural);
