import {Link} from "react-router-dom";

function SearchNavbar(){
    return <div className="search-nav-container">
        <nav>
            <ul>
                <li><Link to="/" className="search-nav-link">Search</Link></li>
                <li><Link to="/about" className="search-nav-link">Images</Link></li>
                <li><Link to="/contact" className="search-nav-link">Videos</Link></li>
                <li><Link to="/color" className="search-nav-link">Maps</Link></li>
                <li><Link to="/todo" className="search-nav-link">News</Link></li>
                <li><Link to="/search" className="search-nav-link">Products</Link></li>
                <button class="drop-sign">Sign in</button>
            </ul>
        </nav>
    </div>
}
export default SearchNavbar;