import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Buttons } from './Buttons';
import './HeroSection.css';
import Typewriter from 'typewriter-effect';
import star from './Star.mp4'

function HeroSection() {
  document.title = "Ayush Ranjan's Website";
  return (
    <div className='hero-container'>
      <video src={star} autoPlay loop muted />
      <p>
      <Typewriter options={{
      strings: ['Hey! Its Ayush Ranjan ', 'Welcome to My Website '],
    autoStart: true,
    loop: true,
  }}
/>
      </p>
  
     
      <div className='hero-btns'>
        <Buttons
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link ='/about-me'
          
        >
          KNOW ME MORE
        </Buttons>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          CONTACT ME <i className='fas fa-paper-plane' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
