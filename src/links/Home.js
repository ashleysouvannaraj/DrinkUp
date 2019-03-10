import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button'
import Level1 from "../Levels/Level1.js"
import Ingredients from './Ingredients';
import { connect } from "react-redux";
import {withRouter } from "react-router-dom";


let Home = (props) => {
    return (
        <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px'}}>
            <h1>Drink Up</h1>
            <br/>
            <h2>Click the button to start bartending!</h2>
            <Button style={{backgroundColor:"#738290", border:"none" }} className="btn-lg"  onClick={() => props.history.push("/Level1")}>Drink Up!</Button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    ingredients: state.ingredients
})


export default withRouter(connect(
    mapStateToProps,
    null
    )(Home));