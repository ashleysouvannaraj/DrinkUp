// import React, { Component } from 'react';


// // class GameTime extends Component {
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             seconds: '60'
// //         }
// //     }

// const defaultTime = ({ highScore = 0 }) => {
//     return {
//         playerScore: 10,
//         timeElapsed: 0,
//         baseScore: 100
//     }
// };

// export default class Timer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             secondsLeft: '60'
//         }
//     }
// }

// updateGame = () => {
//     const { timeElapsed } = this.state;

//     this.updateTimeAndScore();

//     if (timeElapsed > 0) {
//         if (timeElapsed % 3 === 0) {
//             this.decrementPlayerScore();
//         }
//     }
// }

// updateTimeAndScore = () => {
//     const { secondsLeft, playerScore, baseScore } = this.state;

//     this.setState({
//         secondsLeft: secondsLeft - 1,
//         playerScore: playerScore - baseScore,
//     });
// }

//     render() {
//         return (
//             <div>
//                 <h1 defaultTime={this.state.timeElapsed}>You have 60 seconds to answer all 3 drinks correctly!</h1>
//             </div>
//         )
//     };
// }


