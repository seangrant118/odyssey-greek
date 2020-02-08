import React from 'react';

const GenerateFlashcards = (props) => (
  <div>
    <button
      onClick={props.handleCard}
    >
      Get Flashcards
    </button>
  </div>
)

export default GenerateFlashcards;