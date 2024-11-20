import kajakPic from '../assets/kajak.jpg';
import "../kajak.css";

function Kajak(){
return(
    <>
    <div className='kajak'>
    <img src={kajakPic} alt="kajaking" className='image'/>
    <h2 className='heading'>Kajak</h2>
    <p>Kayaking is an excellent sport for beginners because you can get started as soon as you master the basics.</p>
    </div>
    </>
)
}

export default Kajak;