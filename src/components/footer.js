import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer>

      <a href='##' className='footer__logo'> Sosak Woodworks </a>

      <ul>
      <Link to="/src/components/home.js">
      <h6> Home </h6>
      </Link>

      <Link to="/src/components/about.js">
      <h6> About </h6>
      </Link>

      
      <Link to="/src/components/contact.js">
      <h6> Contact </h6>
      </Link>

      
      <Link to="/src/components/products.js">
      <h6> Products </h6>
      </Link>

      
      <Link to="/src/components/services.js">
        <h6>  Services </h6>
      </Link>

      <Link to="/src/components/home.js">
      <h6> More Info </h6>
      </Link>
    
      </ul>


      <div className='footer__socials'>
        <a href='https://facebook.com'><FaFacebookF /></a>
        <a href='https://instagramcom'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Sosak Woodworks ; All rights reserved </small>
      </div>
    </footer>
  )
}

export default Footer