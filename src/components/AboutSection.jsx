import React from 'react'
import home1 from '../img/home1.png';
import {About, Description, Image, Hide} from "../components/styles";
//FRAMER MOTION
import {motion} from 'framer-motion'
import { titleAnim,fade,photoAnim} from '../animation';
import Wave from './wave';
const AboutSection = () => {

  return (
    <About className='about'>
        <Description className="description">
            <div className="title">      
                <Hide className="hide">
                    <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                </Hide>
                <Hide className="hide">
                    <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                </Hide>
                <Hide className="hide">
                    <motion.h2 variants={titleAnim} >true.</motion.h2>
                </Hide>
            </div>
            <motion.p variants={fade} >Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
        </Description>
        <Image className="image">
            <motion.img variants={photoAnim} src={home1} alt="" />
        </Image>
        <Wave />
    </About>
  )
}

// Styled Components


export default AboutSection;