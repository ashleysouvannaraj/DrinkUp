import React, { Component } from 'react';
import './FlipCard.css';

let FlipCard = (props) => {

    return (
        <div class="flip-card">
            <div class= "flip-card-inner">
                <div class="flip-card-front">
                    <img src={require(`${props.image}`)} />
                    {props.name}
                </div>
                <div class="flip-card-back">
                    {props.ingredients}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;
