import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {withRouter} from 'react'
import './App.css';
import Home from './pages/Home';
import Ingredients from './pages/Ingredients';
import About from './pages/About';
import FAQ from './pages/FAQ';

let Navbar = () => {
return <div  style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', textAlign: 'center'}}>
            <div>
                <NavLink to="/Home" style={{margin: '2em'}}>Home</NavLink>
                <NavLink to="/Ingredients" style={{margin: '2em'}}>Ingredients</NavLink>
                <NavLink to="/About" style={{margin: '2em'}}>About</NavLink>
                <NavLink to="/FAQ" style={{margin: '2em'}}>FAQ</NavLink>
                <hr/>
                <Switch>
                    <Route path="/Home" component={Home}/>
                    <Route path="/Ingredients" component={Ingredients}/>
                    <Route path="/About" component={About}/>
                    <Route path="/FAQ" component={FAQ}/>
                </Switch>
            </div>
    </div>
}


export default Navbar;