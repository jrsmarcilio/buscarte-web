import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { GoLocation } from "react-icons/go";

import MapsContentComponent from "./Containers/MapsContainer";

import api from "../../services/api";
import * as Styled from "./styles";

const GoogleMaps = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const [atelies, setAtelies] = useState([]);

  useEffect(() => {
    async function fetchAtelie() {
      const response = await api.get("/atelie");
      if (response.data === null) return console.error(new Error());
      setAtelies(response.data);
    }
    fetchAtelie();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  const handleCoords = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  return (
    <Styled.Container>
      <h3>
        <span>Ateliês nas proximidades</span>
      </h3>
      <Styled.Content>
        <Styled.MapsContent>
          <MapsContentComponent latitude={latitude} longitude={longitude} />
        </Styled.MapsContent>

        <Styled.AtelieContent>
          {atelies.map((item) => (
            <Styled.AtelieItem
              onClick={(e) => handleCoords(item.latitude, item.longitude)}
              key={item.id_atelie}
            >
              <aside style={{ display: "flex", alignItems: "center" }}>
                {/* <GoLocation style={{ padding: 30, fontSize: 18 }} /> */}

                <div className="img-holder">
                  {item.Artista_foto_atelie ? (
                    <img
                      src={item.Artista_foto_atelie.Foto_atelie.descricao}
                      alt={`Foto de perfil do Ateliê ${item.name}`}
                    />
                  ) : (
                    <Styled.FotoNull />
                  )}
                </div>

                <div className="text-holder">
                  <strong>{item.nome}</strong>
                  <span>{`${item.rua}, ${item.numero}, ${item.bairro}`}</span>
                </div>
              </aside>

              <Link
                to={{
                  pathname: `/atelies/${item.nome}`,
                  atelie: item,
                }}
              >
                Acessar Perfil
              </Link>
            </Styled.AtelieItem>
          ))}
        </Styled.AtelieContent>
      </Styled.Content>
    </Styled.Container>
  );
};

export default memo(GoogleMaps);

// JABOATÃO = Latitude: -8.11208, Longitude: -35.0154
