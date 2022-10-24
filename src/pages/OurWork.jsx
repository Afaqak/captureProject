import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from 'framer-motion'
import {sliderContainer, pageAnimation,fade,photoAnim,lineAnim,slider } from '../animation'

const OurWork = () => {

    return (
        <Work exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
            <motion.div variants={sliderContainer}>
            <Frame variants={slider}></Frame>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie> 
                <StyledLink to="/work/the-athlete">
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                </StyledLink>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide> 
                <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                </Hide>
                
            </Movie>
            <Movie>
                <StyledLink to="/work/the-racer">
                <motion.h2 variants={fade}>The Racer</motion.h2>
                </StyledLink>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                    <motion.img variants={photoAnim} src={theracer} alt="athlete" />
                </Hide>
            </Movie>
            <Movie>
                <StyledLink to="/work/good-times">
                <motion.h2 variants={fade}>The Good times</motion.h2>
                </StyledLink>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Hide>
                <motion.img variants={photoAnim} src={goodtimes} alt="athlete" />
                </Hide>
            </Movie>
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 3rem 7rem;
    h2{
        padding: 1rem 0rem;
    }
`

const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    `
const Hide = styled.div`
    overflow: hidden;
    `

    //styling Link
    const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;`

const Frame =styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
    `
const Frame2 =styled(Frame)`
    background: #8ed2ff;`

const Frame3 =styled(Frame)`
    background: #8effa0;`

const Frame4 =styled(Frame)`
    background: #ff8efb;`



export default OurWork;