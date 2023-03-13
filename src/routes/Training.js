import React from 'react'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'


const Training = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading='TRAINING.' text='Pre-flight & In-flight Training.'/>
      <TrainingSection />
      <Footer/>
    </div>
  )
}

export default Training
