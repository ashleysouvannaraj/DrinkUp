import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button'
import Ingredients from './Ingredients';
import { connect } from "react-redux";
import {withRouter } from "react-router-dom";


let Home = (props) => {

    return (
        <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px'}}>
            <h1>Welcome to Drink Up</h1>
            <p>Drink Up is a bartending game that will test your skills on how making drinks. Your score is based off of how
                long it takes to make the drink. Select the available ingredients and make the drink as fast as you can for the highest score. Click the login button to 
                sign in to play!
            </p>

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