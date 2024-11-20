import climbingPic from '../assets/climbing.jpeg';
import "../climbing.css";

function Climbing(){
return(
    <>
    <div className='climbing'>
    <img src={climbingPic} alt="climbing" className='image'/>
    <h2 className='heading'>Mountain climing</h2>
    <p>"Mountaineering is a lifelong philosophy rather than a mere hobby." </p>
    </div>
    </>
)
}

export default Climbing;