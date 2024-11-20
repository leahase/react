import bikePic from '../assets/bike.jpeg';
import "../bike.css";

function Cycling(props){
   
return(
    <>
    <div className="flex-box">
    <img src={bikePic} alt="riding a bike" className="image"/>
    <h2 className="heading">Activity:{` ${props.activity}`}</h2>
    <p className="bike-text">Would you like to {props.activityDescription}?</p> 
    <p><b>Good to know: {props.skills ? "This activity requires experience." : "This activity does not require experience."}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Cycling;