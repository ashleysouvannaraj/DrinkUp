import React, { Component, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import mapDispatchToProps from "./Actions/actionCreators.js";
import Level1 from "./Levels/Level1.js";

class App extends Component {

  componentDidMount() {
      window.addEventListener('click', this.handleWindowClick);
  }

  handleWindowClick() {
    
  }

  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  isGameStarted: state.isGameStarted,
  ingredients: state.ingredients

})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
