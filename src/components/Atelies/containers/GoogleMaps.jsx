import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const BasicMaps = ({ latitude, longitude }) => {
  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    ))
  );

  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default BasicMaps;
