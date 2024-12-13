import "../index.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

   
      function Search (){
        const [trivia, setTrivia] = useState("");
    

      const generateTrivia = () =>{
        axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean").then(response => {
            setTrivia(response.data.results);
        });
      };
   
      return (
        <div>
            <button onClick={generateTrivia}>Search for Trivia questions</button>
            <h2>Trivia</h2>

        </div>
      );
    }
    export default Search;
