// import Diving from './components/Diving.jsx'
// import Cykling from './components/bike.jsx'
// import Kajak from './components/kajak.jsx'
// import Climbing from './components/climbing.jsx'
// import Parasailing from './components/parasailing.jsx';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import Contact from "./pages/Contact.jsx";
import Counter from "./pages/price";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
