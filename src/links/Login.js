import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import '../App.css';
import axios from 'axios';
import mapDispatchToProps from "../Actions/actionCreators";
import { connect } from "react-redux";



let Login = ({login, history}) => {

    let loginUser = (e) => {
        e.preventDefault();
        let user = {
            username: document.getElementById("loginUsername").value,
            password: document.getElementById("loginPassword").value
        }
        
        axios.post("/users/login", user)
        .then(res => {
            var loggedInUser = res.data.username;
            login(loggedInUser);
            history.push("/Home")
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    let registerUser = (e) => {
        e.preventDefault();
        let user = {
            username: document.getElementById("registerUsername").value,
            password: document.getElementById("registerPassword").value
        }
        axios.post("/users/register", user)
        .then(res => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            <h1>Login</h1>
            <form id="login">
          <label form="login" htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="loginUsername"
            placeholder="Username"
            required
          />
          <label form="login" htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="loginPassword"
            placeholder="Password"
            required
          />
          <button type="submit" id="loginSubmit" className="btn btn-info submit" onClick={(e) => loginUser(e)}>Submit</button>
        </form>

        <h1>Register</h1>
            <form id="register">
          <label form="register" htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="registerUsername"
            placeholder="Username"
            required
          />
          <label form="login" htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="registerPassword"
            placeholder="Password"
            required
          />
          <button type="submit" id="registerSubmit" className="btn btn-info submit" onClick={(e) => registerUser(e)}>Register</button>
        </form>
            
        </div>
    )
}

export default withRouter(connect(
    null,
    mapDispatchToProps
    )(Login));