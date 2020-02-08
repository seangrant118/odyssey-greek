import React from "react";
import THE from "../grammer/DefiniteArticle";

const Flashcards = () => (
  <div>
    {THE.map(the => {
      return (
        <div>
          <p>{the.word}</p>
          <p>{the.case}</p>
          <p>{the.gender}</p>
          <p>{the.person}</p>
          <br></br>
        </div>
      );
    })}
  </div>
);

export default Flashcards;
