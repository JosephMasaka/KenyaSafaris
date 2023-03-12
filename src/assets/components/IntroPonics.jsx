import '../css/introponics.css'
import FishAndPlants from '../img/aquaponics.jpg'

function IntroPonics() {

    const aquaponics = {
        "title" : "What is Aquaponics?",
        "contentOpening" : "Aquaponics is a sustainable farming method that combines aquaculture and hydroponics. It involves cultivating fish and plants in a symbiotic environment where the waste produced by the fish is converted into nutrients for the plants to grow. The plants, in turn, help to purify the water for the fish, creating a closed-loop system that requires less water and produces both food and oxygen.",
        "contentClosing" : "Aquaponics can be practiced in a variety of settings, from small-scale backyard systems to large commercial operations. It offers many benefits over traditional farming methods, including higher yields, reduced water usage, and the ability to grow crops year-round. Aquaponics also has a lower environmental impact than conventional agriculture, as it reduces the need for synthetic fertilizers and pesticides."
    }

  return (
    <div className='introPonics'>
        <div className='intro-wrapper'>
            <h1>{aquaponics.title}</h1>
            <div className='intro-content'>
                <div className='intro-text'>
                    <p>{aquaponics.contentOpening}</p>
                    <p className='p-end'>{aquaponics.contentClosing.substring(0, 50) + "..."}</p>
                    <button>Read More</button>
                </div>
                <div className='intro-img'>
                    <img src={FishAndPlants} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroPonics