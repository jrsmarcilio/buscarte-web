import React, { memo } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapsContainer = ({ latitude, longitude }) => {
  const center = {
    lat: latitude,
    lng: longitude,
  };

  const MapWithAMarker = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={center} />
      </GoogleMap>
    ))
  );
  //grid-column: 2/6;
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ gridColumn: 2 / 6, height: `450px` }} />}
      mapElement={<div style={{ height: `100%`, borderRadius: 8 }} />}
    />
  );
};

export default memo(MapsContainer);
