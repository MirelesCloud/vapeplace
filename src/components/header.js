import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Smoke from '../images/smoke0.png'
import Smoke2 from '../images/CBDBanner.png'
import Smoke3 from '../images/smoke31.png'
//import CBDBanner from '../images/CBDBanner.png'

const Header = () => (
  <Carousel infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={2000} dynamicHeight={true}>
    <div >
       <img src={Smoke} alt="header"/>
           <div className="header-one">
             <h1 className="display-3 background">all natural liquids</h1>
           </div>
       <p className="legend">Alchemy</p>
    </div>
       <div>
          <img src={Smoke2} alt="header 2"/>
            <div className="header-two">
              <h1 className="display-3 background">CBD Supplements</h1>
            </div>
          <p className="legend" alt="image">CBD</p>
      </div>
      <div>
          <img src={Smoke3} alt="header 3"/>
            <div className="header-three">
              <h1 className="display-3 background">electronic cigarettes</h1>
            </div>
          <p className="legend" alt="image">vape</p>
      </div>
  </Carousel>
)

export default Header
