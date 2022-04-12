import React from 'react'
import './App.css'

import { Advantages, Destinations, Discover, Feedback, Footer, HowItWorks, Header } from './containers'
import { Navbar, CTA,  } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />
      </div>
          <Discover />
          <CTA />
          <HowItWorks />
          <CTA />
          <Advantages />
          <Destinations />
          <Feedback />
          <Footer />
    </div>
  )
}

export default App