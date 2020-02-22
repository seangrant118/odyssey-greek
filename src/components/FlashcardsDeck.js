import React from "react";
import "./styles/FlashcardsDeck.css";

const FlashcardsDeck = props => (
  <div>
    <select
      value={props.topic}
      onChange={props.onTopicChange}
      className="deck-select"
    >
      {props.deck ? (
        props.deck.map(deck => {
          return (
            <option key={deck.id} value={deck.name}>
              {deck.name}
            </option>
          );
        })
      ) : (
        <option></option>
      )}
    </select>
  </div>
);

export default FlashcardsDeck;
