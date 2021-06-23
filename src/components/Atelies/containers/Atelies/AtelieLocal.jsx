import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import CustomScrollbars from "../../../Scrollbar/Scrollbar";

const ListAtelie = ({ atelies }) => {
  const [listAtelies, setListAtelies] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    function fetchData() {
      setListAtelies(atelies);
    }
    fetchData();
  }, [atelies]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListArtists();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  function fetchMoreListArtists() {
    setTimeout(() => {
      setListAtelies((prevState) => [
        ...prevState,
        ...Array.from(Array(5).keys(), (n) => n + prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000);
  }

  return (
    <Styled.AtelieContainer>
      <Styled.AtelieGroup>
        <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
          {listAtelies.map((atelie) => (
            <Styled.AtelieItem key={atelie.id}>
              <Styled.Thumbnail>
                {atelie.Artista_foto_atelie && (
                  <img
                    style={{
                      borderRadius: "50%",
                      width: "80px",
                    }}
                    src={atelie.Artista_foto_atelie.Foto_atelie.descricao}
                    alt={"Foto perfil do " + atelie.nome}
                  />
                )}
              </Styled.Thumbnail>
              <Styled.Details>
                <ul>
                  <li>
                    <h2>{atelie.nome}</h2>
                  </li>
                  <li>
                    <span>{`${atelie.rua}, ${atelie.numero}, ${atelie.bairro}`}</span>
                  </li>
                  <li>
                    <a href={`https://instagram.com/${atelie.instagram}`}>
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
