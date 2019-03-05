import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './links/Home';
import Ingredients from './links/Ingredients';
import About from './links/About';
import FAQ from './links/FAQ';

let Navbar = () => {
return <div  style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', textAlign: 'center'}}>
            <div>
                <NavLink to="/Home" style={{margin: '2em'}}>Home</NavLink>
                <NavLink to="/Ingredients" style={{margin: '2em'}}>Ingredients</NavLink>
                <NavLink to="/About"  style={{margin: '2em'}}>About</NavLink>
                <NavLink to="/FAQ"  style={{margin: '2em'}}>FAQ</NavLink>
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