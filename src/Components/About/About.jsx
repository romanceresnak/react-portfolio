// import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ptofile_image from '../../assets/profile_image1.png'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={ptofile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am experienced Frontend Developer with over a decade experiences</p>
                    <p>My passion for frontend development is not only </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"> <p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Years of experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projects completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default About