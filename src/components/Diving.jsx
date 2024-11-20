import divingPic from '../assets/diving.jpeg';
import "../diving.css";

function Diving(props){
return(
    <>
    <div className='diving'>
    <img src={divingPic} alt="scuba diving" className='image'/>
    <h2 className='heading' >Activity:{` ${props.activity}`}</h2>
    <p>Maybe you could try to {props.activityDescription}.</p> 
    <p><b>Just to know: {props.skills ? "Do require experience" : "Does not require experience"}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Diving;