import React from "react";
import THE from "../grammer/DefiniteArticle";
import IAm from "../grammer/IAm";
import IKnow from "../grammer/IKnow";
import * as activeVerbs from "../grammer/ActiveVerbs";
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
    const topic = e.target.value;
    if (topic === "Definite Article") {
      this.setState(() => ({
        topic: topic,
        selectedDeck: THE,
        currentCard: this.getRandomCard(THE)
      }));
    } else if (topic === "I Am") {
      this.setState(() => ({
        topic: topic,
        selectedDeck: IAm,
        currentCard: this.getRandomCard(IAm)
      }));
    } else if (topic === "I Know") {
      this.setState(() => ({
        topic: topic,
        selectedDeck: IKnow,
        currentCard: this.getRandomCard(IKnow)
      }));
    } else if (topic === "UnCon") {
      this.setState(() => ({
        topic,
        selectedDeck: activeVerbs.UnCon,
        currentCard: this.getRandomCard(activeVerbs.UnCon)
      }));
    } else if (topic === "ACon") {
      this.setState(() => ({
        topic,
        selectedDeck: activeVerbs.ACon,
        currentCard: this.getRandomCard(activeVerbs.ACon)
      }));
    } else if (topic === "ECon") {
      this.setState(() => ({
        topic,
        selectedDeck: activeVerbs.ECon,
        currentCard: this.getRandomCard(activeVerbs.ECon)
      }));
    } else if (topic === "OCon") {
      this.setState(() => ({
        topic,
        selectedDeck: activeVerbs.OCon,
        currentCard: this.getRandomCard(activeVerbs.OCon)
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
          prevCard={this.updatePrevCard}
        />
      </div>
    );
  }
}

export default Flashcards;
