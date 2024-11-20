import climbingPic from '../assets/climbing.jpeg';
import "../climbing.css";

function Climbing(props){
return(
    <>
    <div className='climbing'>
    <img src={climbingPic} alt="climbing" className='image'/>
    <h2 className='heading'>Activity:{` ${props.activity}`}</h2>
    <p className="text">Maybe you could try to {props.activityDescription}.</p> 
    <p><b>Just to know: {props.skills ? "Do require experience" : "Does not require experience"}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Climbing;