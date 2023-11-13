import React from 'react'
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png"
import bannerImage from "../Assets/home-banner-image.png"
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
const Home = () => {;
  return (
    <div className='home-container'>
      <Navbar/>
      <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
          <img src={BannerBackground}  alt=''/>
        </div>
        <div className='home-text-section'>
          <h1>Your Favourite Meal Delivered Hot and Fresh</h1>
          <p className='primary-text'>Healthy switcher chefs do all the preparation work, like peeling, chopping and marinating, so you can cook a fresh meal</p>
          <button className='secondary-button'>
            Order Now <BsFillArrowRightCircleFill/>
          </button>
        </div>
        <div className='home-image-container'>
          <img src={bannerImage} alt=''/>
        </div>

      </div>
    </div>
  )
}

export default Home;
