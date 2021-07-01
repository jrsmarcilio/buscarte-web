import React, { memo } from "react";
import { SiInstagram } from "react-icons/si";

import Header from "../../components/Header";
import {
  Container,
  StelieContent,
  RoundedCircle,
  AtelieText,
  FotoNull,
} from "./styles";
import MapsContainer from "../../components/GoogleMaps/Containers/MapsContainer";

const HomeAtelie = (props) => {
  const atelie = props.location.atelie;
  console.log(atelie);
  return (
    <>
      <Header />
      <Container>
        <h3>
          <span>Ateliês</span>
        </h3>
        <StelieContent className="container-fluid">
          <section className="col-md-12">
            <div className="row">
              <div
                className="col-md-12 col-lg-3 d-block"
                style={{
                  position: "relative",
                  display: "flex",
                  margin: "0 auto",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RoundedCircle>
                  {atelie.Artista_foto_atelie ? (
                    <>
                      {atelie.Artista_foto_atelie.Foto_atelie && (
                        <>
                          <img
                            src={
                              atelie.Artista_foto_atelie.Foto_atelie.descricao
                            }
                            alt=""
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <FotoNull />
                    </>
                  )}
                </RoundedCircle>
                <h2>{atelie.nome}</h2>
                <AtelieText>
                  <span>
                    <strong>Endereço: </strong>{" "}
                    {`${atelie.rua}, ${atelie.numero} - ${atelie.bairro}, Jaboatão dos Guararapes - PE, ${atelie.cep}`}
                  </span>
                  <hr />
                  <a href={`https://instagram/${atelie.instagram}`}>
                    <SiInstagram /> Acessar Perfil
                  </a>
                </AtelieText>
              </div>
              <div className="col-md-8 p-3" style={{ marginRight: 50}}>
                <MapsContainer
                  latitude={atelie.latitude}
                  longitude={atelie.longitude}
                />
              </div>
            </div>
          </section>
        </StelieContent>
      </Container>
    </>
  );
};

export default memo(HomeAtelie);
