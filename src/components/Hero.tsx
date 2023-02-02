import React from 'react';
import face from '../assets/face.jpg';
import { SocialMedia } from './Badge';
import '../styles/style.css';
import '../styles/component.css'



function Hero() {
  
    return (
      <div className='hero'>
          <img src={face} alt="Portrait of Clayton Curry" />
          <div>
            <div><b>Clayton Curry</b></div>
            <div>Data Scientist</div>
            <div>Software Engineer</div>
            
            <div className='text'></div>
            <SocialMedia className='social'/>
          </div>
      </div>
    );
  }

  export default Hero;