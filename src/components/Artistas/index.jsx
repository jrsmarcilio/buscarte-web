import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import CustomScrollbars from "../Scrollbar/Scrollbar";

const ListAtelie = ({ artistas }) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return (
    <Styled.AtelieContainer>
      <Styled.AtelieGroup>
        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
          {artistas.map((artista) => (
            <Styled.AtelieItem key={artista.id_artista}>
              <Styled.Details>
                <ul>
                  <li>
                    <h2>{artista.nome_artistico}</h2>
                  </li>
                  {artista.Artista_categorium.Categorium && (
                    <li>
                      <span>
                        {artista.Artista_categorium.Categorium.titulo}
                      </span>
                    </li>
                  )}
                  <li>
                    <a href={`https://instagram.com/${artista.instagram}`}>
                      Acessar perfil do Instagram
                    </a>
                  </li>
                </ul>
              </Styled.Details>
              {/* <span className="loco">
                <MdGpsFixed />
              </span> */}
            </Styled.AtelieItem>
          ))}
          {isFetching && "Buscando por mais artistas..."}
        </CustomScrollbars>
      </Styled.AtelieGroup>
    </Styled.AtelieContainer>
  );
};

export default ListAtelie;
