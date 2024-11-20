import parasailingkPic from '../assets/parasailing.jpeg';
import "../parasailing.css";

function Parasailing(props){
return(
    <>
    <div className='flex-box'>
    <img src={parasailingkPic} alt="parasailing" className='image'/>
    <h2 className='heading'>Activity:{` ${props.activity}`}</h2>
    <p>Would you like to {props.activityDescription}? </p>
    <p><b>Good to know: {props.skills ? "This activity requires experience." : "This activity does not require experience."}</b></p>
    <p>Price: {props.priceTag}$</p>
    </div>
    </>
)
}

export default Parasailing;