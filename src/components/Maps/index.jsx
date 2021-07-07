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
        defaultZoom={18}
        defaultCenter={{ lat: latitude, lng: longitude }}
      >
        <Marker position={center} />
      </GoogleMap>
    ))
  );
  return (
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={
          <div
            style={{ height: '100%', width: '100%', transition: "all 1s ease-in" }}
          />
        }
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={
          <div style={{ height: '100%', width: '100%', borderRadius: 8 }} />
        }
      />
  );
};

export default memo(MapsContainer);
