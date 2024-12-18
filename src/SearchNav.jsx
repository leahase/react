import {Link} from "react-router-dom";
import Arrow from "./assets/Polygon.png";


function SearchNavbar(){
    return <div className="search-nav-container">
        <nav>
            <ul>
                <li><Link to="/" className="search-nav-logo">Seker</Link></li>
                <li><Link to="/" className="search-nav-link">Images</Link></li>
                <li><Link to="/" className="search-nav-link">Videos</Link></li>
                <li><Link to="/" className="search-nav-link">Maps</Link></li>
                <li><Link to="/" className="search-nav-link">News</Link></li>
                <li><Link to="/" className="search-nav-link">Products</Link></li>
                <button class="drop-sign">Sign in <img src={Arrow} alt="purple lines" className='image-pic1'/> </button>
            </ul>
        </nav>
    </div>
}
export default SearchNavbar;