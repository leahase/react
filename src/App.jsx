// import Diving from './components/Diving.jsx'
// import Cykling from './components/bike.jsx'
// import Kajak from './components/kajak.jsx'
// import Climbing from './components/climbing.jsx'
// import Parasailing from './components/parasailing.jsx';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
   {/* <h1>Choose your activity:</h1>
    <div className='flex-container'>
    <Diving activity ="SCUBA DIVING" activityDescription="go scuba diving" skills={true} priceTag="100-150"></Diving>
    <Cykling activity ="RIDING A BIKE" activityDescription="rent a bike" skills={false} priceTag="10-20"></Cykling>
    <Kajak activity ="KAYAKING" activityDescription="go kayaking" skills={false} priceTag="10-100"></Kajak>
    <Climbing activity ="MOUNTAIN CLIMBING" activityDescription="go mountain climbing" skills={true} priceTag="depending on equipment needed. around 100-150"></Climbing>
    <Parasailing activity ="PARASAILING" activityDescription="get yourself a guide and go parasailing" skills={false} priceTag="150"></Parasailing>
    </div> */}
    </>
  )
}

export default App
