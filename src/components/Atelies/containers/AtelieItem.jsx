import React from "react";
import { Col, Row } from "react-bootstrap";
import { ContainerAtelie } from "./styles";

const AtelieList = ({ atelie }) => {
  return (
    <ContainerAtelie>
      <Row
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <li key={atelie.id} className="atelie-item">
          <Col>
            {atelie.Artista_foto_atelie && (
              <img
                style={{
                  borderRadius: "50%",
                  width: "80px",
                }}
                src={
                  atelie.Artista_foto_atelie.Foto_atelie.descricao ||
                  "http://localhost:8000/themes/pmahomme/img/logo_left.png"
                }
                alt={"Foto perfil do " + atelie.nome}
              />
            )}
          </Col>
          <Col>
            <strong>{atelie.nome}</strong>
            <span>{`${atelie.rua}, ${atelie.numero}, ${atelie.bairro}`}</span>
            <a href={`https://instagram.com/${atelie.instagram}`}>
              Acessar perfil do Instagram
            </a>
          </Col>
        </li>
      </Row>
    </ContainerAtelie>
  );
};

export default AtelieList;
