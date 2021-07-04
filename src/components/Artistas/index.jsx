import React from "react";
import styled from "styled-components";

import * as Styled from "./styles";

const Scrollbars = Styled.div`
  border-radius: 6;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  overflow-x: hidden;
`;

const ListAtelie = ({ artistas }) => {
  return (
    <Styled.Container>
      <h3>
        <span>Artistas</span>
      </h3>
      <Styled.FilterContent className="container">
        <Styled.SpanActive>Todos</Styled.SpanActive>
        <span>Artistas</span>
        <span>Pintores</span>
        <span>Escultores</span>
        <span>Grafiteiros</span>
        <span>Ceramistas</span>
        <span>Gravuristas</span>
        <span>Poetas</span>
        <span>Vídeos</span>
      </Styled.FilterContent>

      <Styled.ArtistaContent>
        <Scrollbars>
          {artistas.map((artista) => (
            <Styled.ArtistItem>
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
              <Styled.SpanActive>
                {artista.nome.split(" ", 2).join(" ")}
              </Styled.SpanActive>
            </Styled.ArtistItem>
          ))}
        </Scrollbars>
      </Styled.ArtistaContent>
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
