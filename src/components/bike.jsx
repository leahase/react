import bikePic from '../assets/bike.jpeg';
import "../bike.css";

function Cycling(){
return(
    <>
    <div className="bike">
    <img src={bikePic} alt="riding a bike" className='image'/>
    <h2 className="heading">Bike</h2>
    <p className="bike-text">Try riding a bike.</p>
    </div>
    </>
)
}

export default Cycling;