// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import axios from 'axios';

// class GameOver extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             highscores: []
//         }
//     }

//     componentDidMount() {
//         this.getScores();
//     }

//     async getScores() {
//         let response = await axios.get(`/scores/user/${this.props.username}`);
//         console.log(response.data);
//         this.setState({
//             ...this.state,
//             highscores: response.data
//         })
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.highscores.map((record, i) => {
//                     return (
//                         <div key={i}>
                
//                             {record.username} {record.points}
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }

// }

// let mapStateToProps = (state) => {
//     return {
//         username:state.username
//     }
// }

// export default connect(mapStateToProps, null)(GameOver);

