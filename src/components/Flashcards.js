import React from "react";
import THE from "../grammer/DefiniteArticle";
import IAm from '../grammer/IAm';
import FlashcardsDeck from './FlashcardsDeck';
import GenerateFlashcards from "./GenerateFlashcards";
import FlashcardModal from "./FlashcardModal";

class Flashcards extends React.Component {
  state = {
    topic: "Definite Article",
    selectedDeck: THE,
    selectedCard: undefined,
    hideDefinition: true
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
  handleCard = () => {
    const random = Math.floor(Math.random() * this.state.selectedDeck.length)
    const selectedCard = this.state.selectedDeck[random]
    this.setState(() => ({selectedCard: [selectedCard.word, selectedCard.person, selectedCard.case, selectedCard.gender]}))
  };
  handleCloseModal = () => {
    this.setState(() => ({
      selectedCard: undefined,
      hideDefinition: true
    }))
  };
  showDetails = () => {
    this.setState(() => ({hideDefinition: false}))
  }
  render() {
    return (
      <div>
        <FlashcardsDeck 
          topic={this.state.topic} 
          onTopicChange={this.onTopicChange}
        />
        <GenerateFlashcards
          handleCard={this.handleCard}
        />
        <FlashcardModal 
          selectedCard={this.state.selectedCard}
          handleCloseModal={this.handleCloseModal}
          showDetails={this.showDetails}
        />
      </div>
    );
  }
}

export default Flashcards;
