import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1>BiteUP.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit minima quaerat tempore nisi repudiandae ex suscipit culpa itaque, vel exercitationem!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                </div>
            </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-78856-56774</li>
                <li>contact@Biteup.com</li>
            </ul>
            </div>
    </div>
    <hr/>
    <p className="footer-copyright">Copyright 2025 @ BiteUp.com - All Right Reserved.</p>
    </div>
    
  )
}

export default Footer