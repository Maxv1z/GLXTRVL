import React from 'react'
import './FooterStyles.css'
import { FaInstagram, FaTelegram, FaGithub, FaSearchLocation, FaMailBulk, FaPhone } from 'react-icons/fa'




const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: 'white', marginRight: '2rem'}}/>
                    <div>
                        <p>Groove street</p>
                        <h4>Houston, Tx</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}/>1-111-111-1111</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}/> asdasdads@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className="social">
                    <a href="https://www.github.com" target="_blank">
                        <FaGithub size="20"  style={{color: 'white', marginRight: '1rem'}}/>
                    </a>
                    <a href='https://www.instagram.com' target="_blank">
                        <FaInstagram size={20} style={{color: 'white', marginRight: '1rem'}}/>
                    </a>
                    <a href='https://www.telegram.com' target="_blank"><FaTelegram size={20} style={{color: 'white', marginRight: '1rem'}}/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
