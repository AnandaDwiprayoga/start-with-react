import { motion } from 'framer-motion';
import React from 'react'
import { pageAnimation } from '../animation';
import { AboutSection, FaqSection, ServiceSection } from '../components'
import ScrollTop from '../components/scrollTop';

const AboutUs = () => {

    return (
        <motion.div variants={pageAnimation} exit="exit" initial='hidden' animate='show'>
           <AboutSection />
           <ServiceSection />
           <FaqSection />
           <ScrollTop />
        </motion.div>
    )
}

export default AboutUs;
