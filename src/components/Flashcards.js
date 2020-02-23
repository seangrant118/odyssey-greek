import React from "react";
import FlashcardsDeck from "./FlashcardsDeck";
import Card from "./Card";
import DrawCardButton from "./DrawCardButton";
import decks from "../grammer/Decks";

class Flashcards extends React.Component {
  state = {
    topic: "Definite Article",
    category: decks[0].category,
    selectedDeck: decks[0].cards,
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
    const topic = e.target.value;
    decks.map(deck => {
      if (topic === deck.name) {
        this.setState(() => ({
          topic,
          selectedDeck: deck.cards,
          currentCard: this.getRandomCard(deck.cards)
        }));
      }
      return true;
    });
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
      return nextCard;
    } else {
      let nextCard = this.state.selectedDeck[0];
      return nextCard;
    }
  };
  updateNextCard = () => {
    const currentCard = this.state.currentCard;
    this.setState(() => ({
      currentCard: this.getNextCard(currentCard)
    }));
  };
  getPrevCard = currentCard => {
    const currentCardIndex = currentCard.id;
    const deckLength = this.state.selectedDeck.length;
    if (currentCardIndex === 1) {
      let prevCard = this.state.selectedDeck[deckLength - 1];
      return prevCard;
    } else if (currentCardIndex <= deckLength) {
      let prevCard = this.state.selectedDeck[currentCardIndex - 2];
      return prevCard;
    }
  };
  updatePrevCard = () => {
    const currentCard = this.state.currentCard;
    this.setState(() => ({
      currentCard: this.getPrevCard(currentCard)
    }));
  };
  render() {
    return (
      <div>
        <FlashcardsDeck
          category={this.state.category}
          topic={this.state.topic}
          onTopicChange={this.onTopicChange}
          deck={decks}
        />
        <Card
          front={this.state.currentCard.front}
          back={this.state.currentCard.back}
        />
        <DrawCardButton
          drawCard={this.updateCard}
          nextCard={this.updateNextCard}
          prevCard={this.updatePrevCard}
        />
      </div>
    );
  }
}

export default Flashcards;
