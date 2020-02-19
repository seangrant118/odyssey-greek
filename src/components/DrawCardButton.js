import React from "react";
import "./styles/DrawCardButton.css";

class DrawCardButton extends React.Component {
  drawCard = () => {
    this.props.drawCard();
  };
  nextCard = () => {
    this.props.nextCard();
  };
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
