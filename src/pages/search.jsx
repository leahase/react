import "../index.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./search.css";

   
      function Search (){
        const [facts, setFacts] = useState([]);
        const [error, setError] = useState(null);
    

      const generateFacts = () =>{
        setError(null);
        axios.get("https://cat-fact.herokuapp.com/facts").then(response => {
            setFacts(response.data);
        })
        .catch((error) => {
            setError('could not fetch.')
            console.error('error', error);
         });
      };
   
      return (
        <div>
            
            <h2>Cats facts</h2>
            <input class="input-api"
                type="text"
                placeholder="How to design"  
                /> 
                <button class="button-api"onClick={generateFacts}>Search</button>
            <ul>
                {facts.length > 0 ? (
                    facts.map((fact, index)=>(
                        <li key={index}>{fact.text}</li>
                    ))
                ) : (
                    <li>.</li>
                    )}
            </ul>
            <ul class="search-box">
                <li class="box-item">How to design</li>
                <li class="box-item">How to work hard</li>
                <li class="box-item">How to choose font</li>
                <li class="box-item">How to choose color palette</li>
            </ul>
        </div>
      );
    }
    export default Search;
