import "../index.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./search.css";
import Vector2 from '../assets/Vector2.png';
import Pic2 from '../assets/Group1.png';
import Vector3 from '../assets/Vector3.png';
import Pic1 from '../assets/Group.png';
import Clock from '../assets/Group2.svg';


   
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
        <div class="container-api">
             <div>
            <div class="input-button-container">
            <input class="input-api"
                type="text"
                placeholder="How to design"  
                /> 
                <button class="button-api"onClick={generateFacts}>Search</button>
           </div>
            <p>
                {facts.length > 0 ? (
                    facts.map((fact, index)=>(
                        <li key={index}>{fact.text}</li>
                    ))
                ) : (
                    <li>.</li>
                    )}   
          </p>
            </div>
            <ul class="search-box">
                <li class="box-item box1"><img src={Clock} alt="clock" className='clock'/> How to design</li>
                <li class="box-item"><img src={Clock} alt="clock" className='clock'/>How to work hard</li>
                <li class="box-item"><img src={Clock} alt="clock" className='clock'/>How to choose font</li>
                <li class="box-item"><img src={Clock} alt="clock" className='clock'/>How to choose color palette</li>
                
            </ul>
       
            {/* <img src={Vector2} alt="purple lines"  className='image-vector2'/>
            <img src={Pic2} alt="purple lines" className='image-pic2'/>
            <img src={Vector3} alt="purple lines" className='image-vector3'/> */}
            <img src={Pic1} alt="purple lines" class='image-pic1'/>

        </div>
      );
    }
    export default Search;
