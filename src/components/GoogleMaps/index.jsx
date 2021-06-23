import React, { memo, useEffect, useState } from "react";

import MapsContentComponent from "./Containers/MapsContainer";
import Scrollbar from "../Scrollbar";

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
      setAtelies(await response.data);
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
      <Styled.MapsContent>
        <MapsContentComponent latitude={latitude} longitude={longitude} />
      </Styled.MapsContent>

      <Styled.AtelieContent>
        <Scrollbar>
          <ul>
            {atelies.map((item) => (
              <Styled.AtelieItem
                onClick={(e) => handleCoords(item.latitude, item.longitude)}
              >
                <li key={item.id_atelie} className="atelie-item">
                  <header>
                    {item.Artista_foto_atelie ? (
                      <img
                        src={item.Artista_foto_atelie.Foto_atelie.descricao}
                        alt={`Foto do perfil do Ateliê ${item.name}`}
                      />
                    ) : (
                      <div className="null-photo" />
                    )}
                    <div className="atelie-info">
                      <div>
                        <strong>{item.nome}</strong>
                      </div>
                      <div>
                        <span>{`${item.rua}, ${item.numero}, ${item.bairro}`}</span>
                      </div>
                      <div>
                        <a href={`http://github.com/${item.github_username}`}>
                          Acessar Perfil
                        </a>
                      </div>
                    </div>
                  </header>
                </li>
                <hr />
              </Styled.AtelieItem>
            ))}
          </ul>
        </Scrollbar>
      </Styled.AtelieContent>
    </Styled.Container>
  );
};

export default memo(GoogleMaps);

// JABOATÃO = Latitude: -8.11208, Longitude: -35.0154
