import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Timer extends Component {
    constructor(props){
        super(props);
        this.state = {
            remainingSeconds: 60
        };
    }
    updateRemainingSeconds(timeRemainingInSeconds){
        let remainingSeconds = timeRemainingInSeconds % 60;
        this.setState({
            remainingSeconds
        });
    }
    countDown(timeRemainingInSeconds, shouldSkipCallback){
        this.setState({
            timeRemainingInSeconds
        });
        if (!shouldSkipCallback && timeRemainingInSeconds %60 === 0) {
            this.props.onCompletion();
        }
        localStorage.setItem('timeRemainingInSeconds', 'timeRemainingInSeconds');
        if (timeRemainingInSeconds > 0) {
            this.updateRemainingSeconds(timeRemainingInSeconds);
            timeRemainingInSeconds = timeRemainingInSeconds - 1;
            this.setTimeoutId = setTimeout(this.countDown.bind(this,timeRemainingInSeconds, false), 1000);
        }
    }
    componentWillUnmount() {
        clearTimeout(this.setTimeoutId);
    }
    render() {
        return (
            <div className='timer'>
                <div>
                    <Row>
                        <Col>
                        <div className='font-weight-bold lead number-display'>
                            <div>
                                {this.state.remainingSeconds}
                            </div>

                        </div>
                        </Col>
                    </Row>
                </div>

            </div>
        )
    }
}

export default Timer;