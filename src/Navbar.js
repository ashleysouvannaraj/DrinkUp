import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './links/Home';
import Ingredients from './links/Ingredients';
import About from './links/About';
import FAQ from './links/FAQ';
import Level1 from './Levels/Level1';
import Level2 from './Levels/Level2';
import Level3 from './Levels/Level3';
import Level4 from './Levels/Level4';
import Level5 from './Levels/Level5';
import Level6 from './Levels/Level6';
import Level7 from './Levels/Level7';
import Level8 from './Levels/Level8';
import Level9 from './Levels/Level9';
import Level10 from './Levels/Level10';

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
                    <Route exact path="/" component={Home}/>
                    <Route path="/Ingredients" component={Ingredients}/>
                    <Route path="/About" component={About}/>
                    <Route path="/FAQ" component={FAQ}/>
                    <Route path="/Level1" component= {Level1}/>
                    <Route path="/Level2" component= {Level2}/>
                    <Route path="/Level3" component= {Level3}/>
                    <Route path="/Level4" component= {Level4}/>
                    <Route path="/Level5" component= {Level5}/>
                    <Route path="/Level6" component= {Level6}/>
                    <Route path="/Level7" component= {Level7}/>
                    <Route path="/Level8" component= {Level8}/>
                    <Route path="/Level9" component= {Level9}/>
                    <Route path="/Level10" component= {Level10}/>
                </Switch>
            </div>
    </div>
}


export default Navbar;