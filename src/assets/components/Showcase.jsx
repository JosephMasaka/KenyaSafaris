import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Wildlife from '../img/wildlife.mp4'
import Lion from '../img/lion.jpg'
import Rhino from '../img/rhino.jpg'

function Showcase() {
  return (
    <div id='showArea'>
        <Carousel infiniteLoop interval={6000}>
            <div className='custom-slide slide-1'>
                <video id='wildlife' autoPlay loop muted>
                    <source src={Wildlife} type='video/mp4'/>
                </video>
                <div className='showcase-content flex flex-row'>
                    <div className='color-secondary'></div>
                    <h1>Wildlife</h1>
                </div>
            </div>
            <div className='custom-slide slide-1'>
                <img src={Lion} alt="lion" />
            </div>
            <div className='custom-slide slide-1'>
                <img src={Rhino} alt="rhino" />
            </div>
        </Carousel>
    </div>
  )
}

export default Showcase