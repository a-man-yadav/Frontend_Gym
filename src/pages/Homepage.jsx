import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Services from '../components/Services'
import Trainers from '../components/Trainers'
import Testemonials from '../components/Testemonials'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Hero/>
      <Aboutus/> 
      <Services/>
      <Trainers/>
      <Testemonials/>
      <Footer/>
    </div>
  )
}

export default Homepage
