import React from 'react'
import './header.css'
import DiverTraveling from '../../assets/diverTraveling.png'

import Discover from '../discover/Discover'
import HowItWorks from '../howitworks/HowItWorks'
import Contact from '../contact/Contact'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>

      <div className='domoswap__header section__padding' id='home'>
        <div className="domoswap__header-content">
          <h1 className='gradient__text'>“Live with no excuses <br /> and travel with no regrets” </h1>
          <p >Sign in and travel arround the world discover lifestyles and be inpired <br /> through this journey to the unknown, a ll what we need is a </p>
          <div className="domoswap__header-content__button">
            <NavLink to="/signup" className="btn btn-primary" >Sign up for free</NavLink>
          </div>
        </div>
        <div className="domoswap__header-content__image">
          <img src={DiverTraveling} alt="diverTraveling" />
        </div>

      </div>
      <Discover />
      <HowItWorks />
      <Contact />
    </>
  )
}

export default Header