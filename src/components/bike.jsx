import bikePic from '../assets/bike.jpeg';
import "../bike.css";

function Cycling(){
return(
    <>
    <div>
    <img src={bikePic} alt="riding a bike"/>
    <h2>Bike</h2>
    <p>Try riding a bike.</p>
    </div>
    </>
)
}

export default Cycling;