import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";
import {withRouter } from "react-router-dom";
import mapDispatchToProps from '../Actions/actionCreators';


let Home = ({history, startGame}) => {

    let handleGameStart = (e) => {
        startGame();
        history.push("/Level1");
        
    }

    return (
        <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px'}}>
            <h1>Welcome to Drink Up</h1>
            <p>Drink Up is a bartending game that will test your skills on how making drinks. Your score is based off of how
                long it takes to make the drink. Select the available ingredients and make the drink as fast as you can for the highest score. Click the login button to 
                sign in to play!
                OH! and don't forget to click the study page to study before you start!
            </p>

            <Button style={{backgroundColor:"#738290", border:"none" }} className="btn-lg"  onClick={(e) => handleGameStart(e)}>Drink Up!</Button>
        </div>

    )
}


export default withRouter(connect(
    null,
    mapDispatchToProps
    )(Home));