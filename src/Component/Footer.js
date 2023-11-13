import React from 'react'
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from 'react-icons/bs';
// import { SiLinkedlin } from "react-icons/si";
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-one'>
        <div className='footer-logo-container'>
          <img src={Logo} alt=''/>
        </div>
        <div className='footer-icons'>
          <BsTwitter/>
          <SiLinkedin/>
          <BsYoutube/>
          <FaFacebook/>
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className='footer-section-columns' style={{gap:"1rem"}}>
          <h4>234-9048-5255-73</h4>
          <h4>hello@foodie.com</h4>
          <h4>press@foodie.com</h4>
          <h4>contact@foodie.com</h4>
          {/* <span>234-9048-5255-73</span>
          <span>hello@foodie.com</span>
          <span>press@foodie.com</span>
          <span>contact@foodie.com</span> */}
        </div>
        <div className='footer-section-columns'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
        </div>
        </div>
    </div>
        
  )
}
// import Logo from "../Assets/Logo.svg";
// import { BsTwitter } from 'react-icons/bs';
// import { SiLinkedlin } from "react-icons/si";
// import { BsYoutube } from 'react-icons/bs';
// import { FaFacebook } from "react-icons/fa";

export default Footer
