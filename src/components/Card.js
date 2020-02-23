import React from "react";
import "./styles/Card.css";

const Card = props => (
  <div className="card-container noSelect">
    <div className="card">
      <div className="front">
        <div className="greek">
          {
            //writes the word on the front of the card
            props.front
          }
        </div>
      </div>
      <div className="back">
        <div className="definition">
          {//maps the back: [arr] to the back of the card
          props.back ? (
            props.back.map(item => <div key={item}>{item}</div>)
          ) : (
            <p>Select</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
