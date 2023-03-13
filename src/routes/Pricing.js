import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg from '../components/HeroImg'
import PricingCards from "../components/Pricing"

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading='Pricing.' text='Choose your trip.'/>
      <PricingCards />
      <Footer />
    </div>
  )
}

export default Pricing
