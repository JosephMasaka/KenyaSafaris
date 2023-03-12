import '../css/landing.css'
import Fish from '../img/Aquarium.mp4'

function Landing() {
  return (
    <div className="landing-area">
        <video muted loop autoPlay >
            <source src={Fish}/>
        </video>
        <div className='overlay'></div>
        <div className='landing-content'>
          <h1>Explore the world of sustainable aquatic living with our expert guidance.</h1>
          <div className='flex'>
            <button>Aquaponics</button>
            <button>Aquaculture</button>
            <button>Aquariums</button>
          </div>
        </div>
        
    </div>
  )
}

export default Landing