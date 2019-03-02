import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {withRouter} from 'react'
import '../App.css';


let Home = () => {
    return (
        <div style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', maxWidth: '960px'}}>
            <h1>Home Page</h1>
        </div>
    )
}


export default Home;