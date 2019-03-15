import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import {withRouter} from 'react'
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


class Highscores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highscores: []
        }
    }

    async getScores() {
        let response = await axios.get('/highscores');
        console.log(response.data);
        this.setState({
            ...this.state,
            highscores: response.data
        })
    }

    render() {
        return (
            <div>
                {this.props.getScores}
            </div>
        )
    }
}

export default Highscores;