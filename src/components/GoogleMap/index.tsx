import React, { Component, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { IonLoading } from "@ionic/react";
import CustomMarker from "../CustomMarker";
import './index.css';
import { locationOutline, personOutline, personCircleOutline } from "ionicons/icons";

const uuidv1 = require('uuid/v1');

const mapStyles = {
  width: '100%',
  height: '100%',
  overflow: 'visible',
};

const GoogleMap: React.FC<{position: {lat: number; lng: number}; google: any, data: any}> = ({position, google, data}) => {
    const onMarkerClick = (f: {}) => {console.log(f)}
    const handleApiLoaded = (map: any, maps: any) => {
      // use map and maps objects
        console.log({maps});
    };
    let p = !!position ? position : {lat: 18, lng: 38};
    
    return (
      <div style={mapStyles}>
      <GoogleMapReact
        style={mapStyles}
        resetBoundsOnResize
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY || "" }}
        center={p}
        defaultZoom={13}
        yesIWantToUseGoogleMapApiInternals={true}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {
          data.features
            .map((fixture: any) => (
            <CustomMarker
            icon={locationOutline}
            cn={""}
            lat={fixture.geometry.coordinates[1]}
            lng={fixture.geometry.coordinates[0]}
            key={uuidv1()}/>
          ))
        }
          <CustomMarker
            icon={personCircleOutline}
            cn={"heart"}
            lat={p.lat}
            lng={p.lng}
            key={uuidv1()}/>
        
      </GoogleMapReact>
      </div>
    );
}

export default GoogleMap;