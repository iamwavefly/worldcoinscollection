import React, { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import '../styles/map.css';

export default class GoogleMapContainer extends Component {
  render() {
    const position = [29.815104, -95.511292];
    return (
      <MapContainer
        center={position}
        zoom={13}
        maxZoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>WORLDCC Headquarter</Popup>
        </Marker>
      </MapContainer>
    );
  }
}
