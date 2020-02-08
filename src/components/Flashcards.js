import React from "react";
import THE from "../grammer/DefiniteArticle";
import IAm from '../grammer/IAm';
import FlashcardsDeck from './FlashcardsDeck';

class Flashcards extends React.Component {
  state = {
    topic: "Definite Article",
    selectedDeck: THE
  };
  onTopicChange = e => {
    if (e.target.value === "Definite Article") {
      this.setState(() => ({ 
        topic: "Definite Article",
        selectedDeck: THE
    }));
    } else if (e.target.value === "I Am") {
      this.setState(() => ({ 
        topic: "I Am",
        selectedDeck: IAm 
      }));
    }
  };
  render() {
    return (
      <div>
        <FlashcardsDeck topic={this.state.topic} onTopicChange={this.onTopicChange}/>
        <button onClick={this.getFlashcards}>Get Flashcards</button>
      </div>
    );
  }
}

export default Flashcards;
