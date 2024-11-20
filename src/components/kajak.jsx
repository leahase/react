import kajakPic from '../assets/kajak.jpg';
import "../kajak.css";

function Kajak(props){
return(
    <>
    <div className='kajak'>
    <img src={kajakPic} alt="kajaking" className='image'/>
    <h2 className='heading'>Activity:{` ${props.activity}`}</h2>
    <p>Maybe you could try to {props.activityDescription}. </p> 
    <p><b>Just to know: {props.skills ? "Do require experience" : "Does not require experience"}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Kajak;