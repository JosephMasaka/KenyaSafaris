import { Carousel } from 'react-responsive-carousel'
import '../css/fishTypes.css'
import Guppy from '../img/guppy.png'

function FishTypes() {

    const fishTypes = [{
        "fishKey" : 0,
        "fishType" : "Guppy",
        "aboutFish" : "The guppy fish is a small, colorful, and hardy freshwater fish that is popular in aquariums due to its peaceful nature and easy care requirements."
    },
    {
        "fishKey" : 1,
        "fishType" : "Neon Tetra",
        "aboutFish" : "The guppy fish is a small, colorful, and hardy freshwater fish that is popular in aquariums due to its peaceful nature and easy care requirements."
    },
    {
        "fishKey" : 2,
        "fishType" : "Angel Fish",
        "aboutFish" : "The guppy fish is a small, colorful, and hardy freshwater fish that is popular in aquariums due to its peaceful nature and easy care requirements."
    }, 
    {
        "fishKey" : 3,
        "fishType" : "Angel Fish",
        "aboutFish" : "The guppy fish is a small, colorful, and hardy freshwater fish that is popular in aquariums due to its peaceful nature and easy care requirements."
    }
    ]

    const fishTypesToRender = 3
    const fishTypesSliced = fishTypes.slice(0, fishTypesToRender)

  return (
    <div className='fishTypes'>
        <div className='aquarium-fish'>
            <h1>Explore the diversity of aquarium fish.</h1>
            <div className='flex'>
               {
                    fishTypesSliced.map((fish) => 
                        <div key={Math.random(500, 10000)}  className='fish-cards'>
                            <img src={Guppy} alt='' />
                            <div className='fish-content'>
                                <h3>{fish.fishType}</h3>
                                <p>{fish.aboutFish}</p>
                            </div>
                        </div>    
                    )
                }
            </div>
            <div className='flex flex-btn'>
                <button>See More...</button>
            </div>
        </div>
    </div>
  )
}

export default FishTypes