import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import '../App.css';
import Button from 'react-bootstrap/Button'
import Level1 from "../Levels/Level1.js"


let Home = () => {
    return (
        <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px'}}>
            <h1>Home Page</h1>
            <br/>
            <h2>Click the button to start bartending!</h2>
            <Button variant="primary" onClick={() => {console.log("Hello")}}>Drink Up!</Button>
        </div>
    )
}


export default Home;