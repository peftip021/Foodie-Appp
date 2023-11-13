import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from "react-icons/ai"

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className='primary-heading'>What They Are Saying</h1>
            <p className='primary-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <div className='testimonials-section-button' style={{width: "50%", marginLeft: "25%", backgroundColor: "#fffafa"}}>
            <img src={ ProfilePic } alt='' style={{justifyItems: "center", width: "100px", marginLeft: "40%"}}/>
            <p style={{textAlign: "center"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>
            <div className='testimonials-stars-container' style={{alignItems: "center", marginLeft: "34%"}}>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2 style={{color: "red", marginLeft: "38%"}}>John Doe</h2>
        </div>
      
    </div>
  )
}

export default Testimonial
