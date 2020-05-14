import React from "react";
import FlashcardsDeck from "./FlashcardsDeck";
import Card from "./Card";
import DrawCardButton from "./DrawCardButton";
import decks from "../grammer/Decks";

class Flashcards extends React.Component {
  state = {
    topic: "Definite Article",
    category: decks[0].category.name,
    selectedDeck: decks[0].cards,
    currentCard: {},
  };
  //sets the inital card
  componentDidMount = () => {
    const currentCards = this.state.selectedDeck;
    this.setState(() => ({
      currentCard: this.getRandomCard(currentCards),
    }));
  };
  //returns a random card from the current deck
  getRandomCard = (currentCards) => {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  };
  //changes the topic, changes the deck and generates a new card
  onTopicChange = (e) => {
    const topic = e.target.value;
    decks.map((deck) => {
      if (topic === deck.name) {
        this.setState(() => ({
          topic,
          selectedDeck: deck.cards,
          currentCard: this.getRandomCard(deck.cards),
        }));
      }
      return true;
    });
  };
  //updates the card
  updateCard = () => {
    const currentCards = this.state.selectedDeck;
    this.setState(() => ({
      currentCard: this.getRandomCard(currentCards),
    }));
  };
  //returns the next card, sequentially, from the deck
  getNextCard = (currentCard) => {
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
  //updates the card to the next sequential card
  updateNextCard = () => {
    const currentCard = this.state.currentCard;
    this.setState(() => ({
      currentCard: this.getNextCard(currentCard),
    }));
  };
  //returns the previous card from the deck
  getPrevCard = (currentCard) => {
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
  //updates the card to the previous card in the deck
  updatePrevCard = () => {
    const currentCard = this.state.currentCard;
    this.setState(() => ({
      currentCard: this.getPrevCard(currentCard),
    }));
  };
  //changes the category of the decks
  onCategoryChange = (e) => {
    const category = e.target.value;
    const newCard = decks.find((el) => el.category.name === category);
    const topic = {
      target: {
        value: newCard.name,
      },
    };
    //changes the state of category
    this.setState(() => ({
      category,
    }));
    //changes the state of the topic, selectedDeck and currentCard
    this.onTopicChange(topic);
  };
  render() {
    return (
      <div className="flashcard-container">
        <FlashcardsDeck
          category={this.state.category}
          topic={this.state.topic}
          onTopicChange={this.onTopicChange}
          onCategoryChange={this.onCategoryChange}
          deck={decks}
        />
        <Card card={this.state.currentCard} deck={this.state.selectedDeck} />
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
