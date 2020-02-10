import React from 'react';
import './styles/Card.css'

const Card = (props) => (
  <div className='card-container'>
    <div className='card'>
      <div className='front'>
        <div className='greek'>{props.front}</div>
      </div>
      <div className='back'>
        <div className='definition'>
        {props.back ? props.back.map((item) => (
          <p key={item}>{item}</p>
        )) : <p>Select</p>}
        </div>
      </div>
    </div>
  </div>
)

export default Card;