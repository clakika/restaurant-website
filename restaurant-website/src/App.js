import React, { Component } from 'react';
import './App.css';

import Home from './Layout/Home';
import Reservation from './Layout/Reservation';
import Services from './Layout/Services';
import Contacts from './Layout/Contacts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Reservation />
        <Services />
        <Contacts />
      </div>
    );
  }
}

export default App;
