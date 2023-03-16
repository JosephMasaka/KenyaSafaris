import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Sidebar from './assets/components/Sidebar'
import Footer from './assets/components/Footer'
import LandingPage from './assets/pages/LandingPage'



function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="App">
        <Navbar openSidebar={() => {setIsSidebarOpen(true)}}/>
        <Sidebar isSidebarOpen={isSidebarOpen} closeMenu={() => {setIsSidebarOpen(false)}}/>
        <div className='scroll-snap-align'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
