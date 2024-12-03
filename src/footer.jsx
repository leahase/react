import {Link} from "react-router-dom";

function Footer(){
    return <div>
        <footer>
            <p>©</p>
            <p>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/color" className="footer-link">Color-picker</Link>
            <Link to="/todo" className="footer-link">todo list</Link>
            </p>
        </footer>
    </div>
}
export default Footer;