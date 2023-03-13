import React from 'react'
import HeroImg from '../components/HeroImg'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg heading='CONTACT.' text='Contact GLX Travel'/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact
