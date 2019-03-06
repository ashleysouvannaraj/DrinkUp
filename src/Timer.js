import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer(expiryTimestamp) {
    const {
        seconds
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called')});

    return(
        <div style={{textAlign: 'center'}}>
            <h1>You have 60 seconds!</h1>
            <p>The faster you answer, the more points you get!</p>
            <div style={{fontSize: '100px'}}>
                <span>{seconds}</span>
            </div>
        </div>
    );
}

export default function pointTimer() {
    var t = new Date();
    t.setSeconds(t.getSeconds() + 60);
    return (
        <div>
            <MyTimer expiryTimestamp={t} />
        </div>
    );
}

export default Timer;






