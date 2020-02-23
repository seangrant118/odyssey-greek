import React from "react";
import "./styles/DrawCardButton.css";

class DrawCardButton extends React.Component {
  //draws a random card
  drawCard = () => {
    this.props.drawCard();
  };
  //draws the next card in the deck
  nextCard = () => {
    this.props.nextCard();
  };
  //draws the previous card in the deck
  prevCard = () => {
    this.props.prevCard();
  };
  render(props) {
    return (
      <div className="button-container noSelect">
        <button className="button" onClick={this.prevCard}>
          Prev Card
        </button>
        <button className="button" onClick={this.drawCard}>
          Rand Card
        </button>
        <button className="button" onClick={this.nextCard}>
          Next Card
        </button>
      </div>
    );
  }
}

export default DrawCardButton;
