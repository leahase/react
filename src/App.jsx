// import Diving from './components/Diving.jsx'
// import Cykling from './components/bike.jsx'
// import Kajak from './components/kajak.jsx'
// import Climbing from './components/climbing.jsx'
// import Parasailing from './components/parasailing.jsx';
import { BrowserRouter , Routes , Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import Contact from "./pages/Contact.jsx";
import Counter from "./pages/price";
import Color from "./pages/Color.jsx";
import Todo from "./pages/Todo.jsx";
import Searchbar from "./pages/search.jsx";
import SearchNavbar from "./SearchNav.jsx";


const App = () => {
  return (
    <BrowserRouter>
    <RouteWrapper/>
    </BrowserRouter>
  );
};

const RouteWrapper = () =>{
const location = useLocation();

  return (
    <div>
    {location.pathname !== "/search" && <Navbar/> /* Visar nav för alla förutom search */}
    {location.pathname === "/search" && <SearchNavbar/> /* Visar nav för search */}
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/color" element={<Color/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/search" element={<Searchbar/>}/>
    </Routes>
    <Footer></Footer>
   
    </div>
  )
}

export default App
