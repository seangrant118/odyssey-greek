import React from 'react';
import './styles/DrawCardButton.css'

class DrawCardButton extends React.Component {
  drawCard = () => {
    this.props.drawCard();
  }
  render(props) {
    return (
      <div className='button-container'>
        <button className='button' onClick={this.drawCard}>Draw Card</button>
      </div>
    )
  }
}

export default DrawCardButton;
