import {Link} from "react-router-dom";

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
                <button class="drop-sign">Sign in</button>
            </ul>
        </nav>
    </div>
}
export default SearchNavbar;