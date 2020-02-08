import React from "react";
import THE from "../grammer/DefiniteArticle";
import IAm from '../grammer/IAm'

class Flashcards extends React.Component {
  state = {
    topic: "Definite Article",
    selectedDeck: THE
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
  render() {
    return (
      <div>
        <select value={this.state.topic} onChange={this.onTopicChange}>
          <option value="Definite Article">The Definite Article</option>
          <option value="I Am">I Am</option>
        </select>
        <button onClick={this.getFlashcards}>Get Flashcards</button>
      </div>
    );
  }
}

// const Flashcards = () => (
//   <div>
//     {THE.map(the => {
//       return (
//         <div>
//           <p>{the.word}</p>
//           <p>{the.case}</p>
//           <p>{the.gender}</p>
//           <p>{the.person}</p>
//           <br></br>
//         </div>
//       );
//     })}
//   </div>
// );

export default Flashcards;
