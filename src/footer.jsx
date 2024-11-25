import {Link} from "react-router-dom";

function Footer(){
    return <div>
        <footer>
            <p>
            <Link to="/" >Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </p>
        </footer>
    </div>
}
export default Footer;