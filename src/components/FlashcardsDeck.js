import React from "react";
import "./styles/FlashcardsDeck.css";

const FlashcardsDeck = props => (
  <div>
    <select
      value={props.topic}
      onChange={props.onTopicChange}
      className="deck-select"
    >
      <option value="Definite Article">Definite Article</option>
      <option value="I Am">εἰμί</option>
      <option value="I Know">οἷδα</option>
      <option value="UnCon">Uncontracted Verbs</option>
      <option value="ACon">α Contract Verbs</option>
      <option value="ECon">ε Contract Verbs</option>
      <option value="OCon">ο Contract Verbs</option>
    </select>
  </div>
);

export default FlashcardsDeck;
