
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import Map from './Map';

import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        <Map />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/map" component={Map} />
      </div>
    );
  }
}

export default withRouter(App);
