import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Showcase from './assets/components/Showcase'
import Sidebar from './assets/components/Sidebar'
import Landing from './assets/components/Landing'
import IntroAqua from './assets/components/IntroAqua'
import FishTypes from './assets/components/FishTypes'
import FeaturedAquariums from './assets/components/FetauredAquariums'
import IntroPonics from './assets/components/IntroPonics'
import AquaLab from './assets/components/AquaLab'



function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="App">
      <Navbar openSidebar={() => {setIsSidebarOpen(true)}}/>
      <Sidebar isSidebarOpen={isSidebarOpen} closeMenu={() => {setIsSidebarOpen(false)}}/>
      <div className='scroll-snap-align'>
        <Landing />
        <IntroAqua />
        <IntroPonics />
        <FishTypes />
        <FeaturedAquariums />
        <AquaLab />
      </div>
    </div>
  );
}

export default App;
