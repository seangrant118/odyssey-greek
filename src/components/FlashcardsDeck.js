import React from "react";
import "./styles/FlashcardsDeck.css";

const FlashcardsDeck = props => {
  const categoryOptions = new Map([
    ...props.deck.map(category => [
      category.category.id,
      category.category.name
    ])
  ]);
  return (
    <div>
      <select
        value={props.category}
        className="deck-select"
        onChange={() => {}}
      >
        {props.deck ? (
          [...categoryOptions].map(([id, name]) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))
        ) : (
          <option></option>
        )}
      </select>
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
};

export default FlashcardsDeck;
