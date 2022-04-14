import React from 'react'
import './App.css'

import {Router, Switch} from 'react-router'

import { Discover, Footer, HowItWorks, Header, Contact } from './containers'
import { Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />
          <Discover />
          <HowItWorks />
          <Contact />
          <Footer />
      </div>
          
    </div>
  )
}

export default App