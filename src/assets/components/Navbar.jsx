import React from 'react'

function Navbar({openSidebar}) {
  return (
    <div id='Navbar' className='navbar'>
        <div className='flex flex-row container'>
            <div className='logo'>
                <h2 id='logo'>Safari's</h2>
            </div>
            <div className='ham-menu' onClick={openSidebar}>
                <div>
                    <div className="ham ham-1"></div>
                    <div className="ham ham-2"></div>
                    <div className="ham ham-3"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar