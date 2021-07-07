import React from "react";

import Titulo from "../Titulos";
import * as S from "./styles";
import Maps from "../Maps";

function ArtistaPerfil({ artista }) {
  return (
    <S.Container>
      <S.Apresentacao>
        <S.ArtistaItem>
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
            <aside style={{ width: 200 }}>
              <Titulo title={artista.nome} />
              <strong>
                {artista.Artista_categorium
                  ? artista.Artista_categorium.Categorium.titulo
                  : "Artista"}
              </strong>
            </aside>

        </S.ArtistaItem>
      </S.Apresentacao>

      <S.MapsContent>
        <aside>
          <span>{artista.data_nascimento ?
          `${artista.data_nascimento} - 
            ${(new Date().getFullYear() - new Date(artista.data_nascimento).getFullYear())} anos` : "Idade não informada"}</span>

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
      </S.MapsContent>
    </S.Container>
  );
}

export default ArtistaPerfil;
