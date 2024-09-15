//import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="Roman" />
      <h1><span>I am Roman Ceresnak,</span> AWS Architect based in Slovakia.</h1>
      <p>I am a Solution Architect from Bratislava, Slovakia with more than 5 years of cloud experience in multiple companies like Adastra, Eviden and Ditec.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href='#contact'>
            Connect with me
            </AnchorLink>
          </div>
        <div className="hero-resume">My resume</div>
      </div>  
    </div>
  )
}

export default Hero