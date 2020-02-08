import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'))

const FlashcardModal = (props) => (

  <Modal
    isOpen={!!props.selectedCard}
    onRequestClose={props.handleCloseModal}
    contentLabel='selected card'
    closeTimeoutMS={200}
    className='modal'
  >
    {props.selectedCard && <p>{props.selectedCard[0]}</p>}

    <button onClick={props.showDetails}>Show Details</button>
    <button onClick={props.handleCloseModal}>Close</button>
  </Modal>
)

export default FlashcardModal

//try creating another nested child