import React from "react";
import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiBlogger } from "react-icons/si";
import { GrInternetExplorer } from "react-icons/gr";

import * as S from "./styles";

function ArtistaPerfil({ artista }) {
  return (
    <S.ArtistaContainer>
      <aside>
        <div className="perfil-content">
          <div className="img-holder">
            {artista.foto ? (
              <img
                src={artista.foto}
                alt={`Foto de perfil do artista ${artista.nome}`}
              />
            ) : (
              <S.FotoNull />
            )}
          </div>

          <div className="nome-holder">
            <span>
              {artista.Artista_categorium
                ? artista.Artista_categorium.Categorium
                  ? artista.Artista_categorium.Categorium.titulo
                  : "Artista"
                : "Artista"}
            </span>

            <strong>{artista.nome}</strong>
          </div>
          <span className="divider-hr"></span>
        </div>

        <div className="perfil-links">
          <Link to="/fb">
            <FaFacebook />
            Acessar Facebook
          </Link>

          <Link to="/instagram">
            <AiFillInstagram />
            Acessar Instagram
          </Link>

          <Link to="/site">
            <GrInternetExplorer />
            Acessar Site
          </Link>

          <Link to="/blog">
            <SiBlogger />
            Acessar Blog
          </Link>
        </div>
      </aside>
      <article>
        <div className="sobre-content">
          <h3>Sobre o Artista</h3>
          <span>{artista.descricao}</span>
        </div>
        <div className="infor-content">
          <aside className="titulo-items">
            <span>Nascimento</span>
            <span>E-mail</span>
            <span>Telefone</span>
            <span>Celular</span>
            <span>Endereço</span>
          </aside>
          <aside className="infor-items">
            <span>
              {artista.data_nascimento
                ? `${artista.data_nascimento} (${
                    new Date().getFullYear() -
                    new Date(artista.data_nascimento).getFullYear()
                  } anos)`
                : "Não informado"}
            </span>
            <span>{artista.email || 'Não informado'}</span>
            <span>{artista.fone1 || 'Não informado'}</span>
            <span>{artista.fone2 || 'Não informado'}</span>
            <span className="info-end">
              {`
							 		${artista.rua || "Não informado"}, ${artista.numero || "s/n"},
									${artista.bairro} - Jaboatão dos Guararapes - PE,
									${artista.cep}`}
            </span>
          </aside>
        </div>
      </article>
    </S.ArtistaContainer>
  );
}

export default ArtistaPerfil;

