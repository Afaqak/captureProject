import React from 'react'
//page component
import AboutSection from '../components/AboutSection'
import AboutServices from '../components/AboutServices'
import FAQSec from '../components/FAQsection'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
const AboutUs = () => {
  return (
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <AboutSection />
        <AboutServices />
        <FAQSec />
    </motion.div>
  )
}

export default AboutUs