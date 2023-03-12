import '../css/introAqua.css'
import Fish from '../img/Fish.jpg'

function IntroAqua() {

    const aquaculture = {
        "title" : "What is Aquaculture?",
        "contentOpening" : "Aquaculture is the farming of aquatic organisms such as fish, shellfish, and aquatic plants. This practice involves cultivating freshwater or saltwater organisms under controlled conditions, either in tanks or in open waters, to meet the growing demand for seafood.",
        "contentClosing" : "Aquaculture is an important industry for providing food security and economic growth, especially in developing countries. It can also help reduce overfishing and minimize the impact of wild fisheries on the environment by producing seafood in a more sustainable manner. However, aquaculture must be managed carefully to avoid negative impacts on the surrounding ecosystem, such as pollution and disease transmission."
    }

  return (
    <div className='introAqua'>
        <div className='intro-wrapper'>
            <h1>{aquaculture.title}</h1>
            <div className='intro-content'>
                <div className='intro-text'>
                    <p>{aquaculture.contentOpening}</p>
                    <p className='p-end'>{aquaculture.contentClosing.substring(0, 100) + "..."}</p>
                    <button>Read More</button>
                </div>
                <div className='intro-img'>
                    <img src={Fish} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default IntroAqua