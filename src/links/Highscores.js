import React, { Component } from 'react';
import '../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { connect } from "react-redux";


class Highscores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highscores: []
        }
    }

    componentDidMount() {
        this.getScores()
    }


    async getScores() {
        let response = await axios.get('/scores/highscores');
        console.log(response.data);
        this.setState({
            ...this.state,
            highscores: response.data
        })
    }

    render() {
        return (
            <div>
                <h1>HIGHSCORES</h1> <hr />
                {this.state.highscores.map((record, i) => {
                    return (
                        <div key={i}>
                            <Row>
                                <Col style={{fontSize: '25px', textAlign: 'left'}}>{record.username}</Col> 
                                <Col style={{fontSize: '25px', textAlign: 'right'}}>{record.points}</Col>
                            </Row>
                        </div>
                    )
                })}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
    username: state.username
    }
}

export default connect( mapStateToProps, null)(Highscores);