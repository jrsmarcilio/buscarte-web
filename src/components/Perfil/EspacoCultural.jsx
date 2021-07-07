import React from "react";

import Titulo from "../Titulos";
import * as S from "./styles";
import Maps from "../Maps";

function EspacoCultural({ atelie }) {
  return (
    <S.Container>
      <S.Apresentacao>
        <S.AtelieItem>
          <aside className="info-img-nome">
            {atelie.Artista_foto_atelie ? (
              <>
                {atelie.Artista_foto_atelie.Foto_atelie && (
                  <div className="img-holder">
                    <img
                      src={atelie.Artista_foto_atelie.Foto_atelie.descricao}
                      alt=""
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                <S.FotoNull />
              </>
            )}
            <aside style={{ width: 200}}>
              <Titulo title={atelie.nome} />
            </aside>
          </aside>

          <aside>
            <strong>Endereço: </strong>
            <span>{`${atelie.rua}, ${atelie.numero} - ${atelie.bairro},`}</span>
            <span>Jaboatão dos Guararapes - PE, {atelie.cep}</span>

            <strong style={{ marginTop: 10 }}>Complemento: </strong>
            <span>
              {atelie.complemento ? atelie.complemento : "Não Informado"}
            </span>

            <span style={{ marginTop: 10 }}>
              <strong>Latitude: </strong>
              {atelie.latitude}
            </span>

            <span>
              <strong>Longitude: </strong>
              {atelie.longitude}
            </span>
          </aside>
        </S.AtelieItem>
      </S.Apresentacao>

      <S.MapsContent>
        <Maps latitude={atelie.latitude} longitude={atelie.longitude} />
      </S.MapsContent>
    </S.Container>
  );
}

export default EspacoCultural;
