import parasailingkPic from '../assets/parasailing.jpeg';
import "../parasailing.css";

function Parasailing(){
return(
    <>
    <div className='parasailing'>
    <img src={parasailingkPic} alt="parasailing" className='image'/>
    <h2 className='heading'>Parasailing</h2>
    <p>Parasailing is an excellent sport for beginners because you can get started as soon as you master the basics.</p>
    </div>
    </>
)
}

export default Parasailing;