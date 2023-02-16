import { Link } from "react-router-dom"


function Sidebar({closeMenu, isSidebarOpen}) {

    const sidebarOpen = (isSidebarOpen === true) ? 'sidebar-open' : 'sidebar-closed'

  return (
    <div id="Sidebar" className={`sidebar ${sidebarOpen}`}>
        <div className="side-container">
            <div className="closeMenuBtn" onClick={closeMenu}>
                <div className="close-span close-span-1"></div>
                <div className="close-span close-span-2"></div>
            </div>
            <div className="flex flex-column side-list">
                <a href="/">Address</a>
                <a href="/">Address</a>
                <a href="/">Address</a>
                <a href="/">Address</a>
                <a href="/">Address</a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar