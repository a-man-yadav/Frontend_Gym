import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'
import Trainers from '../components/Trainers'
import Testemonials from '../components/Testemonials'
import Footer from '../components/Footer'
import { motion, useScroll } from 'motion/react'

const Homepage = () => {

  const { scrollYProgress } = useScroll();

  return (
    <div className='flex flex-col'>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          zIndex:100,
          backgroundColor: "#e50914",
        }} />
        <div>
      <Navbar />
      <Hero />
      <Aboutus />
      <Services />
      <Trainers />
      <Testemonials />
      <Footer />
      </div>
    </div>
  )
}

export default Homepage
