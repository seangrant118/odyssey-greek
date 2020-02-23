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
        value={props.category.name}
        className="deck-select"
        onChange={props.onCategoryChange}
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
            if (props.category === deck.category.name) {
              return (
                <option key={deck.id} value={deck.name}>
                  {deck.name}
                </option>
              );
            }
            return true;
          })
        ) : (
          <option></option>
        )}
      </select>
    </div>
  );
};

export default FlashcardsDeck;
