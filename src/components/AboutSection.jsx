import React from 'react'
import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from "../components/styles";
const AboutSection = () => {
  return (
    <About className='about'>
        <Description className="description">
            <div className="title">
                <Hide className="hide">
                    <h2>We work to make</h2>
                </Hide>
                <Hide className="hide">
                    <h2>your <span>dreams</span> come</h2>
                </Hide>
                <Hide className="hide">
                    <h2>true.</h2>
                </Hide>
            </div>
            <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
            <button>Contact Us</button>
        </Description>
        <Image className="image">
            <img src={home1} alt="" />
        </Image>
    </About>
  )
}

// Styled Components

export default AboutSection;