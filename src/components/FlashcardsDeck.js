import React from "react";
import "./styles/FlashcardsDeck.css";

const FlashcardsDeck = props => {
  //returns an array with unique category options
  const categoryOptions = new Map([
    ...props.deck.map(category => [
      category.category.id,
      category.category.name
    ])
  ]);
  return (
    <div className="deck-container">
      <div className="select-container">
        <p className="small-title noSelect">Category:</p>
        <select
          value={props.category.name}
          className="deck-select"
          onChange={props.onCategoryChange}
        >
          {//writes an <option> for each unique category
          props.deck ? (
            [...categoryOptions].map(([id, name]) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))
          ) : (
            <option></option>
          )}
        </select>
      </div>
      <div className="select-container">
        <p className="small-title noSelect"> Topic: </p>
        <select
          value={props.topic}
          onChange={props.onTopicChange}
          className="deck-select"
        >
          {//writes an <option> for each topic with a category that matches the current category
          props.deck ? (
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
    </div>
  );
};

export default FlashcardsDeck;
