import React, { Component } from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaXZhbi1kcnIiLCJhIjoiY2s2amxqdjUxMDYzOTNsbW5laTJyZ2FpNyJ9.ZPtM453-v8uBosIVB4c7yA';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 37.8,
        longitude: -122.4,
        zoom: 14,
        bearing: 0,
        pitch: 0
      }
    };
  }

  render() {
    return (
        <MapGL
          {...this.state.viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/ivan-drr/ck6s7vijs0nnb1irtj8t980vd"
          onViewportChange={viewport => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
    );
  }

}

export default Map;
