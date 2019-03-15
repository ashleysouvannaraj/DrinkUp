import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./links/Home";
import Ingredients from "./links/Ingredients";
import Login from "./links/Login";
import Level from "./Levels/Level1";
import { initialState } from "./reducer";
import { connect } from "react-redux";
import {withRouter } from "react-router-dom";

let Navbar = ({currentUser}) => {
 
console.log(currentUser);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <nav className="navbar" id="nav-bar">
        <NavLink
          to="/Home"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/Ingredients"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          Ingredients
        </NavLink>
        <NavLink
          to="/Login"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          Login
        </NavLink>
        
        {/* <a href="/">Logout</a> */}
     <span style={{ margin: "2em", textDecoration: "none", color: "white"}}>{currentUser.toUpperCase()}</span>
      </nav>
      <hr />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/Ingredients" component={Ingredients} />
        <Route path="/Login" component={Login} />
        {/* generate levels */}
        {Object.keys(initialState.levels).map((_, i) => {
          const ii = i + 1; // adjust for 0 start point
          return (
            <Route
              key={ii}
              path={"/Level" + ii}
              render={props => <Level {...props} level={ii} />}
            />
          );
        })}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser.username
})

export default withRouter(connect(
  mapStateToProps,
  null
  )(Navbar));
