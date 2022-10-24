import React from 'react'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import styled from 'styled-components'
import { titleAnim } from '../animation'

const ContactUs = () => {
  return (
    <StyledContact exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send us a message</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send an email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Social media</h2>
          </StyledSocial>
        </StyledHide>
      </div>

    </StyledContact>
  )
}

const StyledContact = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
`
const StyledTitle = styled.div`
margin-bottom: 4rem;
color: black;`

const StyledHide = styled.div`
overflow: hidden;`

const StyledSocial = styled(motion.div)`
display: flex;
align-items: center;
h2{
  margin: 2rem;
}`
const StyledCircle = styled.div`
border-radius: 50%;
width: 3rem;
height: 3rem;
background: #353535;`

export default ContactUs