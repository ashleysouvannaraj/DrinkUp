import React from 'react';
import './FlipCard.css';

let FlipCard = (props) => {

    return (
        <div className="flip-card">
            <div className= "flip-card-inner">
                <div className="flip-card-front">
                    <img src={require(`${props.image}`)} />
                    {props.name}
                </div>
                <div className="flip-card-back">
                    {props.ingredients}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
