import React from "react";
import "./styles/FlashcardsDeck.css";

const FlashcardsDeck = props => (
  <div>
    <select
      value={props.topic}
      onChange={props.onTopicChange}
      className="deck-select"
    >
      <option value="Definite Article">The Definite Article</option>
      <option value="I Am">I Am</option>
    </select>
  </div>
);

export default FlashcardsDeck;
