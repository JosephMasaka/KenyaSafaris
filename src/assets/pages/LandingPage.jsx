import Landing from "../components/Landing"
import IntroAqua from "../components/IntroAqua"
import IntroPonics from "../components/IntroPonics"
import FishTypes from "../components/FishTypes"
import FeaturedAquariums from "../components/FetauredAquariums"
import AquaLab from "../components/AquaLab"
import Newsletter from "../components/Newsletter"

function LandingPage() {
  return (
    <div className='landing-page'>
        <Landing />
        <IntroAqua />
        <IntroPonics />
        <FishTypes />
        <FeaturedAquariums />
        <AquaLab />
        <Newsletter />
    </div>
  )
}

export default LandingPage