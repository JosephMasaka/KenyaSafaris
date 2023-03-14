import React from 'react'
import '../css/newsletter.css'

function Newsletter() {
  return (
    <div className='newsletter'>
        <div className='newsletter-wrapper flex'>
            <div className='news-img'>

            </div>
            <div className='news-content'>
                <div className='news-text'>
                    <h1>Get our latest updates First.</h1>
                    <div>
                        <input type='text' placeholder='Enter Email'/>
                        <button>Send Mail</button>
                    </div>
                </div>
                <div className='donate'>
                    <p>Support creativity and innovation. Donate now to empower content creators.</p>
                    <button>Donate</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter