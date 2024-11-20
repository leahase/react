import Diving from './components/Diving.jsx'
import Cykling from './components/bike.jsx'
import Kajak from './components/kajak.jsx'
import Climbing from './components/climbing.jsx'
import Parasailing from './components/parasailing.jsx'

function App() {
  return (
    <>
    <div className='flex-container'>
    <Diving activity ="DIVING" activityDescription="going scuba diving" skills={true} priceTag="100-150"></Diving>
    <Cykling activity ="RIDING A BIKE" activityDescription="riding a bike" skills={false} priceTag="0-10, depending on if you own a bike"></Cykling>
    <Kajak activity ="KAJAKING" activityDescription="going kajaking" skills={false} priceTag="10-100"></Kajak>
    <Climbing activity ="MOUNTAIN CLIMBING" activityDescription="go mountain climbing" skills={true} priceTag="depending on equipment needed. around 100-150"></Climbing>
    <Parasailing activity ="PARASAILING" activityDescription="get yourself a guide and go parasailing" skills={false} priceTag="150"></Parasailing>
    </div>
    </>
  )
}

export default App
