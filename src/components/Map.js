import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import * as CONSTANTS from '../constants/global';

import Form from 'react-bootstrap/Form';

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
      },
      mode: CONSTANTS.lightMap
    };
  }

  componentDidMount() {
    document.getElementsByClassName("mapboxgl-ctrl-bottom-left")[0].style.display = "none";
    document.getElementsByClassName("mapboxgl-ctrl-bottom-right")[0].style.display = "none";
  }

  handleMode = e => {
    const label = document.getElementsByClassName("custom-control-label");

    if (e.target.checked) {
      this.setState(state => {
        state.mode = CONSTANTS.darkMap;
        return state;
      });
      label[0].innerHTML = "Disable night mode";
      label[0].style.color = "rgb(221, 221, 221)";
    } else {
      this.setState(state => {
        state.mode = CONSTANTS.lightMap;
        return state;
      });
      label[0].style.color = "rgb(64, 64, 64)";
      label[0].innerHTML = "Enable night mode";
    }
  }

  render() {
    return (
        <>
          <MapGL
            {...this.state.viewport}
            width="100vw"
            height="100vh"
            mapStyle={"mapbox://styles/" + this.state.mode}
            onViewportChange={viewport => this.setState({viewport})}
            mapboxApiAccessToken={MAPBOX_TOKEN}>
            <Form.Check
              type="switch"
              id="btnDarkMode"
              label="Enable night mode"
              onChange={e => this.handleMode(e)}
              style={{top: "2%"}}
            />
          </MapGL>
        </>
    );
  }

}

export default Map;
