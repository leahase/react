import parasailingkPic from '../assets/parasailing.jpeg';
import "../parasailing.css";

function Parasailing(props){
return(
    <>
    <div className='parasailing'>
    <img src={parasailingkPic} alt="parasailing" className='image'/>
    <h2 className='heading'>Activity:{` ${props.activity}`}</h2>
    <p>Maybe you could try to {props.activityDescription}. </p>
    <p><b>Just to know: {props.skills ? "Do require experience" : "Does not require experience"}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Parasailing;