import React, { Component } from 'react';
import './FlipCard.css';

let FlipCard = (props) => {

    return (
        <div class="flip-card">
            <div class= "flip-card-inner">
                <div class="flip-card-front">
                    <img src={require(`${props.image}`)} alt='image' width="150px" height="150px"/>
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
