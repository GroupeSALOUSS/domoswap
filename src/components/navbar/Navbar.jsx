import React from 'react'
import './navbar.css'
import logo from '../../assets/Logo.svg'

import 'antd/dist/antd.css';
import { Button } from 'antd';
import SearchBar from './searchbar';

function navbar() {
  return (
    <div className='domoswap__navbar'>
      <div className='domoswap__navbar-links'>
        <div className='domoswap__navbar-links__logo'>
          <img src={logo} alt="DomoSwwap" />
          <SearchBar />
        </div>
        <div className='domoswap__navbar-links__container'>
          <p><a href="#discovers"></a>Discover</p>
          <p><a href="#home"></a>How it works?</p>
          <p><a href="#home"></a>How it works?</p>
        </div>
        <div className='domoswap__navbar-sign'>
          <p><a href="#home"></a>Sign in</p>
          <Button type='primary' >Sign up</Button>
        </div>
      </div>
    </div>
  )
}

export default navbar