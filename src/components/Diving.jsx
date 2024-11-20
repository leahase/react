import divingPic from '../assets/diving.jpeg';
import "../diving.css";

function Diving(){
return(
    <>
    <div className='diving'>
    <img src={divingPic} alt="scuba diving" className='image'/>
    <h2 className='heading' >Scuba diving</h2>
    <p>Enjoy the live under the surface.</p>
    </div>
    </>
)
}

export default Diving;