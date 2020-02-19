import React from "react";
import THE from "../grammer/DefiniteArticle";
import IAm from "../grammer/IAm";
import FlashcardsDeck from "./FlashcardsDeck";
import Card from "./Card";
import DrawCardButton from "./DrawCardButton";

class Flashcards extends React.Component {
  state = {
    topic: "Definite Article",
    selectedDeck: THE,
    currentCard: {}
  };
  componentDidMount = () => {
    const currentCards = this.state.selectedDeck;
    this.setState(() => ({
      currentCard: this.getRandomCard(currentCards)
    }));
  };
  getRandomCard = currentCards => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };
  onTopicChange = e => {
    if (e.target.value === "Definite Article") {
      this.setState(() => ({
        topic: "Definite Article",
        selectedDeck: THE,
        currentCard: this.getRandomCard(THE)
      }));
    } else if (e.target.value === "I Am") {
      this.setState(() => ({
        topic: "I Am",
        selectedDeck: IAm,
        currentCard: this.getRandomCard(IAm)
      }));
    }
  };
  updateCard = () => {
    const currentCards = this.state.selectedDeck;
    this.setState(() => ({
      currentCard: this.getRandomCard(currentCards)
    }));
  };
  getNextCard = currentCard => {
    const currentCardIndex = currentCard.id;
    const deckLength = this.state.selectedDeck.length;
    if (currentCardIndex < deckLength) {
      let nextCard = this.state.selectedDeck[currentCardIndex];
      console.log(nextCard);
      return nextCard;
    } else {
      let nextCard = this.state.selectedDeck[0];
      console.log(nextCard);
      return nextCard;
    }
  };
  updateNextCard = () => {
    const currentCard = this.state.currentCard;
    this.setState(() => ({
      currentCard: this.getNextCard(currentCard)
    }));
  };
  render() {
    return (
      <div>
        <FlashcardsDeck
          topic={this.state.topic}
          onTopicChange={this.onTopicChange}
        />
        <Card
          front={this.state.currentCard.front}
          back={this.state.currentCard.back}
        />
        <DrawCardButton
          drawCard={this.updateCard}
          nextCard={this.updateNextCard}
        />
      </div>
    );
  }
}

export default Flashcards;
