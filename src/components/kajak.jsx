import kajakPic from '../assets/kajak.jpg';
import "../kajak.css";

function Kajak(props){
return(
    <>
    <div className='flex-box'>
    <img src={kajakPic} alt="kajaking" className='image'/>
    <h2 className='heading'>Activity:{` ${props.activity}`}</h2>
    <p>Would you like to {props.activityDescription}? </p> 
    <p><b>Good to know: {props.skills ? "This activity requires experience." : "This activity does not require experience."}</b></p>
    <p>Price: {props.priceTag}$</p>
    <button>Let's go</button>
    </div>
    </>
)
}

export default Kajak;