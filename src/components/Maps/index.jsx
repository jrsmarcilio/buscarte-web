import React, { memo } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapsContainer = ({ latitude, longitude, width, height }) => {
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
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3bP0tG9rhAjx36eKw05uoo2qZ9LeGB9s&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={
        <div
          style={{
            height: `${height}`,
            width: `${width}`,
            transition: "all 1s ease-in",
          }}
        />
      }
      containerElement={
        <div style={{ height: `${height}`, width: `${width}` }} />
      }
      mapElement={
        <div
          style={{ height: `${height}`, width: `${width}`, borderRadius: 8 }}
        />
      }
    />
  );
};

export default memo(MapsContainer);
