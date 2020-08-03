import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Layout/Home/Home';
import Reservation from './Layout/Reservation/Reservation';
import Services from './Layout/Services/Services';
import Contacts from './Layout/Contacts/Contacts';

import divider from './img/divider.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Home className="App_Component"/>
          <img src={divider}
              className="Divider"></img>
          <Reservation className="App_Component"/>
          <img src={divider}
              className="Divider"></img>
          <Services className="App_Component"/>
          <img src={divider}
              className="Divider"></img>
          <Contacts className="App_Component"/>
        </div>
        </Router>
    );
  }
}

export default App;
