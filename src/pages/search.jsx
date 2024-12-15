import "../index.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

   
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
            <button onClick={generateFacts}>Search for Cat facts</button>
            <h2>Cats facts</h2>
            <ul>
                {facts.length > 0 ? (
                    facts.map((fact, index)=>(
                        <li key={index}>{fact.text}</li>
                    ))
                ) : (
                    <li>No facts fetched yet.</li>
                    )}
            </ul>
        </div>
      );
    }
    export default Search;
