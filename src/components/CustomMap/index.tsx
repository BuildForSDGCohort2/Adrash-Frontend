import React, { useState } from 'react';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import './index.css';
const CustomMap: React.FC<{position: {latitude: number; longitude: number}}> = ({position}) => {
    const [zoom, setzoom] = useState(13)
    return (
      <Map center={[position.latitude, position.longitude]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          key={"fdaffdfsa"}
          position={[position.latitude, position.longitude]}
          onClick={() => {
            console.log("clikced")
          }}
        />
      </Map>
    );
}

export default CustomMap;
