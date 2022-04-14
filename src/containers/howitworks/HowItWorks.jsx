import React from 'react'
import './howitworks.css'
import { AiOutlineLogin } from '@react-icons/all-files/ai/AiOutlineLogin'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BsHeartHalf } from '@react-icons/all-files/bs/BsHeartHalf'


const HowItWorks = () => {
  return (
    <div className='domoswap__howitworks'>
      <section id="howitworks">
        <div className="container title">
          <div className="row">
            <div className="col-12 bottompadding">
              <h3 className="fs-5 text-center mb-0 title">How it works ?</h3>
              <h1 className="display-6  text-center mb-4"> These are our steps</h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mr-5">
            <div className="col-md-4">
              <div class="card p-3" >
                <div class="card-body text-center">
                  <AiOutlineLogin color='#1890FF' size={50} />
                  <h5 class="card-title mb-3 fs-4 fw-bold">SIGN UP </h5>
                  <p class="card-text lead">Sign up for free and get your choice you'll not regret it. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3" >
                <div class="card-body text-center">
                  <BsHouse color='#1890FF' size={50} />
                  <h5 class="card-title mb-3 fs-4 fw-bold">FILL YOUR SIGN</h5>
                  <p class="card-text lead">Fill in the gaps and create a domo and enjoy it.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card p-3" >
                <div class="card-body text-center">
                  <BsHeartHalf color='#1890FF' size={50} />
                  <h5 class="card-title mb-3 fs-4 fw-bold">DO YOUR SWIPE</h5>
                  <p class="card-text lead">Find your destination and create your swap.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default HowItWorks