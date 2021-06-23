import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import api from "../../services/api";
import AtelieLocal from "./containers/Atelies/AtelieLocal";
import GoogleMaps from "./containers/GoogleMaps";

import { Title, Container } from "./styles";

const Atelies = () => {
  const [atelies, setAtelies] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    async function getAtelies() {
      const response = await api.get("/atelie");

      if (response.length === 0) {
        return console.log("Error, nenhum ateliê encontrado");
      }
      setAtelies(response.data);
    }
    getAtelies();
  }, []);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <Container>
      <Row
        style={{
          height: 500,
          width: 650,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: 5,
        }}
      >
        <Title>
          <h3>Jaboatão dos Guararapes, PE</h3>
        </Title>
        <GoogleMaps latitude={-8.11208} longitude={-35.0154} />
      </Row>
      <Row
        style={{
          height: 500,
          width: 650,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          borderRadius: 5,
        }}
      >
        <Title>
          <h3>Ateliês nas proximidades</h3>
        </Title>
        <AtelieLocal atelies={atelies} />
      </Row>
    </Container>
  );
};

export default Atelies;

// JABOATÃO = Latitude: -8.11208, Longitude: -35.0154
