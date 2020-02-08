import React from 'react';

const FlashcardsDeck = (props) => (
  <div>
    <select
      value={props.topic}
      onChange={props.onTopicChange}
    >
      <option value='Definite Article'>The Definite Article</option>
      <option value='I Am'>I Am</option>
    </select>
  </div>
)

export default FlashcardsDeck