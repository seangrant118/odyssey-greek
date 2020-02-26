import React from "react";
import "./styles/Card.css";

const Card = props => (
  <div className="card-container noSelect">
    <div className="card">
      <div className="front">
        <div className="greek">
          {
            //writes the word on the front of the card
            props.card.front
          }
        </div>
        <div className="count">
          {props.card.id}/{props.deck.length}
        </div>
      </div>
      <div className="back">
        <div className="definition">
          {// maps the back: [arr] to the back of the card
          props.back ? (
            props.card.back.map(item => <div key={item}>{item}</div>)
          ) : (
            <p>Select</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
