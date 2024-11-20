import Diving from './components/Diving.jsx'
import Cykling from './components/bike.jsx'
import Kajak from './components/kajak.jsx'
import Climbing from './components/climbing.jsx'
import Parasailing from './components/parasailing.jsx'

function App() {
  return (
    <>
    <div className='flex-container'>
    <Diving></Diving>
    <Cykling></Cykling>
    <Kajak></Kajak>
    <Climbing></Climbing>
    <Parasailing></Parasailing>
    </div>
    </>
  )
}

export default App
