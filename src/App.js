import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default App;
