import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as Styles from "./styles";
import formatArtistName from "../../utils/formatArtistName";

const ListArtistas = ({ artistas }) => {
  const [artists, setArtists] = useState(artistas);
  const [filter, setFilter] = useState("Todos");

  useEffect(() => {
    setArtists(artistas);
  }, [artistas]);

  useEffect(() => {
    const artistasFiltro = artistas.filter(
      (item) => item.Artista_categorium.Categorium.titulo === `${filter}`
    );
    filter === "Todos" ? setArtists(artistas) : setArtists(artistasFiltro);
  }, [filter]);

  return (
    <Styles.Container>
      <h3>
        <span>Artistas</span>
      </h3>

      <Styles.FilterContent>
        <button onClick={() => setFilter("Todos")}> Todos </button>
        <button onClick={() => setFilter("Artista")}> Artistas </button>
        <button onClick={() => setFilter("Pintor")}> Pintores </button>
        <button onClick={() => setFilter("Escultor")}> Escultores </button>
        <button onClick={() => setFilter("Grafiteiro")}> Grafiteiros </button>
        <button onClick={() => setFilter("Ceramista")}> Ceramistas </button>
        <button onClick={() => setFilter("Gravurista")}> Gravuristas </button>
        <button onClick={() => setFilter("Muralista")}> Muralistas </button>
        <button onClick={() => setFilter("Poeta")}> Poetas </button>
      </Styles.FilterContent>

      <Styles.ArtistaContent>
        {artists.map((artista) => (
          <Link
            to={{
              pathname: `/artistas/${artista.id_artista}`,
            }}
          >
            <Styles.ArtistItem>
              {artista.foto ? (
                <div className="img-holder">
                  <img
                    src={artista.foto}
                    alt={`Foto de perfil do artista ${artista.nome}`}
                  />
                </div>
              ) : (
                <>
                  <Styles.FotoNull />
                </>
              )}
              <aside>
                <span>
                  {artista.Artista_categorium
                    ? artista.Artista_categorium.Categorium
                      ? artista.Artista_categorium.Categorium.titulo
                      : "Artista"
                    : "Artista"}
                </span>
                <Styles.AsideActive>
                  <strong>{formatArtistName(artista.nome)}</strong>
                </Styles.AsideActive>
              </aside>
            </Styles.ArtistItem>
          </Link>
        ))}
      </Styles.ArtistaContent>
    </Styles.Container>
  );
};

export default memo(ListArtistas);
