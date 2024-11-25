import {Link} from "react-router-dom";

function Footer(){
    return <div>
        <footer>
            <p>©</p>
            <p>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            </p>
        </footer>
    </div>
}
export default Footer;