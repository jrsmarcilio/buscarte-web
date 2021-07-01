import React from "react";

import Scrollbars from "../Scrollbar";

import * as Styled from "./styles";

const ListAtelie = ({ artistas }) => {
  return (
    <div className="container">
      <h3>
        <span>Artistas</span>
      </h3>
      <Styled.FilterContent className="container">
        <span
          style={{
            display: "inline-block",
            borderBottom: "1px solid red",
            paddingBottom: "2px",
          }}
        >
          Todos
        </span>
        <span>Artistas</span>
        <span>Pintores</span>
        <span>Escultores</span>
        <span>Grafiteiros</span>
        <span>Ceramistas</span>
        <span>Gravuristas</span>
        <span>Poetas</span>
        <span>Vídeos</span>
      </Styled.FilterContent>

      <Styled.ArtistaContent className="row">
        {/* <Scrollbars> */}
        {artistas.map((artista) => (
          <div className="col-4 col-sm-3">
            <Styled.RoundedCircle>
              {artista.Artista_foto_atelie ? (
                <>
                  {artista.Artista_foto_atelie.Foto_atelie && (
                    <>
                      <img
                        src={artista.Artista_foto_atelie.Foto_atelie.descricao}
                        alt=""
                      />
                    </>
                  )}
                </>
              ) : (
                <>
                  <Styled.FotoNull />
                </>
              )}
            </Styled.RoundedCircle>
            <Styled.ArtistaText  style={{ width: 200}}>
              <span
                style={{
                  borderBottom: "1px solid red",
                  paddingBottom: "2px",
                }}
              >
                {artista.nome}
              </span>
            </Styled.ArtistaText>
          </div>
        ))}
        {/* </Scrollbars> */}
      </Styled.ArtistaContent>
    </div>
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
