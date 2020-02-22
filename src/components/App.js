
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Map from './Map';
import Toolbar from './Toolbar';
import AnimatedTitle from './AnimatedTitle';
import * as CONSTANTS from '../constants/global';

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    // this.props.history.push('/login')
    // this.props.history.push('/signup')
  }

  render() {
    return (
      <div className="App">
        <Map />
        <Toolbar />

        <div id="blocker">
          <AnimatedTitle
            title="Manage your journeys"
            rotatingWords={CONSTANTS.rotatingTitleWords} />
        </div>

        <Login />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/map" component={Map} />
      </div>
    );
  }
}

export default withRouter(App);
