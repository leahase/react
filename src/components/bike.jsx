import bikePic from '../assets/bike.jpeg';
import "../bike.css";

function Cycling(props){
   
return(
    <>
    <div className="bike">
    <img src={bikePic} alt="riding a bike" className="image"/>
    <h2 className="heading">Activity:{` ${props.activity}`}</h2>
    <p className="bike-text">Maybe you could try to {props.activityDescription}.</p> 
    <p><b>Just to know: {props.skills ? "Do require experience" : "Does not require experience"}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Cycling;