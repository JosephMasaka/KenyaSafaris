import { useState } from 'react';
import './App.css';
import Navbar from './assets/components/Navbar';
import Showcase from './assets/components/Showcase';
import Sidebar from './assets/components/Sidebar';

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="App">
      <Navbar openSidebar={() => {setIsSidebarOpen(true)}}/>
      <Showcase />
      <Sidebar isSidebarOpen={isSidebarOpen} closeMenu={() => {setIsSidebarOpen(false)}}/>
    </div>
  );
}

export default App;
