import Welcome from './Welcome';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <h3>
        Made by Luis Heredia
      </h3>
      <Switch>
        <Route exact path='/' component={Form} />
        <Route path='/welcome' render={props => (
          <Welcome {...props} />
        )}/>
      </Switch>
    </div>
      </Router>
    );
  }
}

export default App;
