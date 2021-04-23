import React, { Component } from 'react';

import './styles/mapSection.css';

export default class MapSection extends Component {
  render() {
    return (
      <div className="map_container">
        <div className="map_header">
          <h3 className="sub_header">WE ARE IN THE WORLD</h3>
          <h2 className="map_title">We have Users all Over the World</h2>
        </div>
        <div className="map"></div>
      </div>
    );
  }
}
