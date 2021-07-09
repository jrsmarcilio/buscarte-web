import React from "react";

import * as S from "./styles";

function ArtistaPerfil({ artista }) {
  return (
    <S.Container>
      <S.Apresentacao>
        <S.ArtistaItem>
          <aside className="aside-ArtItem" style={{ textAlign: "center" }}>
            {artista.foto ? (
              <div className="img-holder">
                <img
                  src={artista.foto}
                  alt={`Foto de perfil do artista ${artista.nome}`}
                />
              </div>
            ) : (
              <>
                <S.FotoNull />
              </>
            )}
            <span>
              {artista.Artista_categorium
                ? artista.Artista_categorium.Categorium
                  ? artista.Artista_categorium.Categorium.titulo
                  : "Artista"
                : "Artista"}
            </span>
            <S.AsideActive>
              <strong>{artista.nome}</strong>
            </S.AsideActive>
          </aside>

          <aside>
            <span>
              {artista.data_nascimento
                ? `${artista.data_nascimento} - 
            ${
              new Date().getFullYear() -
              new Date(artista.data_nascimento).getFullYear()
            } anos`
                : "Idade não informada"}
            </span>

            <span>{artista.email || "Não Informado"}</span>

            <span>Telefone: {artista.fone1 || "Não Informado"}</span>

            <span>Celular: {artista.fone2 || "Não Informado"}</span>

            <strong>Endereço: </strong>
            <span>
              {`
                ${artista.rua}, ${artista.numero || "s/n"} - ${artista.bairro},
              `}
            </span>
            <span>Jaboatão dos Guararapes - PE, {artista.cep}</span>

            <strong style={{ marginTop: 10 }}>Complemento: </strong>
            <span>
              {artista.complemento ? artista.complemento : "Não Informado"}
            </span>
          </aside>
        </S.ArtistaItem>
      </S.Apresentacao>

      <S.ArtistaContent>
        <aside>
          <h3>Sobre</h3>
          <span>{artista.descricao || "Não Informado"}</span>
        </aside>
      </S.ArtistaContent>
    </S.Container>
  );
}

export default ArtistaPerfil;
