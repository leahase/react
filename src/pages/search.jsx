import "../index.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

    const Search = () => {
      const [data, setData] = useState([]);
      };

      useEffect(() => {
        axios.get()
        .then(response => {
            setPosts(response.data);
        })
        .catch(error =>
        console.error(error);
    )
      })

   
      return (
        <div>
            <h2>Search: {query}</h2>
        </div>
      )
    export default Search;
    
