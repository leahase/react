import {Link} from "react-router-dom";

function Navbar(){
    return <div className="nav-container">
        <nav>
            <ul>
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
                <li><Link to="/color" className="nav-link">Color-picker</Link></li>
            </ul>
        </nav>
    </div>
}
export default Navbar;