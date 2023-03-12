import { Carousel } from 'react-responsive-carousel'
import '../css/aquariums.css'
import Guppy from '../img/guppy.png'

function FeaturedAquariums() {

    const aquariums = [
        {   
            "aquariumKey" : 0,
            "aquariumTitle" : "Indoor Aquarium",
            "aquariumContent" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum exercitationem rem eius recusandae ea adipisci earum quam velit aperiam?"
        },
        {
            "aquariumKey" : 1,
            "aquariumTitle" : "Indoor Aquarium",
            "aquariumContent" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum exercitationem rem eius recusandae ea adipisci earum quam velit aperiam?"
        },
        {
            "aquariumKey" : 2,
            "aquariumTitle" : "Indoor Aquarium",
            "aquariumContent" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum exercitationem rem eius recusandae ea adipisci earum quam velit aperiam?"
        },
        {
            "aquariumKey" : 3,
            "aquariumTitle" : "Indoor Aquarium",
            "aquariumContent" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsum exercitationem rem eius recusandae ea adipisci earum quam velit aperiam?"
        }
    ]

    const numberOfAquariumsToDisplay = 3
    const aquariumsSliced = aquariums.slice(0, numberOfAquariumsToDisplay)
    const title = "Explore the wonders of aquatic life with our expertly crafted aquariums."

  return (
    <div className='featuredTypes'>
        <div className='aquarium-featured'>
            <h1>Dream Aquariums.</h1>
            <div className='flex'>
            {
                aquariumsSliced.map((aquarium) => 
                        <div key={aquarium.aquariumKey} className='featured-cards'>
                            <img src={Guppy} alt='' />
                            <div className='featured-content'>
                                <h3>{aquarium.aquariumTitle}</h3>
                                <p>{aquarium.aquariumContent}</p>
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

export default FeaturedAquariums