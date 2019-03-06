import React, { Component, useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
// import mapDispatchToProps from "./Actions/actionCreators.js";
import Level1 from "./Levels/Level1.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <MyTimer/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  isGameStarted: state.isGameStarted,
  ingredients: state.ingredients

})

const mapDispatchToProps = (dispatch) => ({
  startGame: () => dispatch({type:'START_GAME'}),
  selectLiquor: () => dispatch({type: 'SELECT_LIQUOR'}),
  selectLiquer: () => dispatch({type: 'SELECT_LIQUER'}),
  selectMixers: () => dispatch({type: 'SELECT_MIXERS'}),
  selectGarnishes: () => dispatch({type: 'SELECT_GARNISHES'}),
  submitDrink: () => dispatch({tyle: 'SUBMIT_DRINK'})
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
