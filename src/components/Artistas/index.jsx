import React from "react";
import { ButtonGroup, Button, Table } from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

import Scrollbars from "../Scrollbar";

import * as Styled from "./styles";

const ListAtelie = ({ artistas }) => {
  return (
    <Styled.Container>
      <Styled.ArtistaContent>
        <Scrollbars>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome </th>
                <th>Categoria</th>
                <th>Instagram</th>
                <th>Perfil</th>
              </tr>
            </thead>
            {artistas.map((artista) => (
              <tbody key={artista.id_artista}>
                <tr>
                  <td>{artista.nome_artistico}</td>

                  {artista.Artista_categorium ? (
                    <>
                      {artista.Artista_categorium.Categorium ? (
                        <td>{artista.Artista_categorium.Categorium.titulo}</td>
                      ) : (
                        <td> Categoria não Identificada </td>
                      )}
                    </>
                  ) : (
                    <td> Categoria não identificada </td>
                  )}
                  <td>
                    <FiInstagram /> {artista.instagram}
                  </td>
                  <td>
                    <BiUserCircle />{" "}
                    <a href={`https://instagram.com/${artista.instagram}`}>
                      Acessar Perfil
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </Scrollbars>
      </Styled.ArtistaContent>

      <Styled.FilterContent>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Grafiteiro</Button>
          <Button variant="secondary">Artístico</Button>
          <Button variant="secondary">Escultor</Button>
        </ButtonGroup>

        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Muralista</Button>
          <Button variant="secondary">Cerâmica</Button>
          <Button variant="secondary">Plástico</Button>
        </ButtonGroup>
      </Styled.FilterContent>
    </Styled.Container>
  );
};

export default ListAtelie;

/*
  <Styled.AtelieContainer>
      <Styled.AtelieGroup>
        <Scrollbars>
          {artistas.map((artista) => (
            <Styled.AtelieItem key={artista.id_artista}>
              <Styled.Details>
                <ul>
                  <li>
                    <h2>{artista.nome_artistico}</h2>
                  </li>
                  <li>
                    <a href={`https://instagram.com/${artista.instagram}`}>
                      Acessar perfil do Instagram
                    </a>
                  </li>
                </ul>
              </Styled.Details>
            </Styled.AtelieItem>
          ))}
        </Scrollbars>
      </Styled.AtelieGroup>
    </Styled.AtelieContainer>
*/
