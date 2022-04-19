import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container footer-mh title'>
      <div className="row">
        <div className="col-2">
          <h5>Short links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><NavLink to="/" className="nav-link p-0 text-muted">Home</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="/discover" className="nav-link p-0 text-muted">Discover</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="/howitworks" className="nav-link p-0 text-muted">How it works?</NavLink></li>
            <li className="nav-item mb-2"><NavLink to="/contact" className="nav-link p-0 text-muted">Contact us</NavLink></li>
          </ul>
        </div>
        <div className="col-8 offset-1 emailsection">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of whats new and exciting from us.</p>
            <div className="d-flex w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex justify-content-between py-4 my-4 border-top">
        <p>&copy; 2022@ DomoSwap, Inc. All rights reserved.</p>
        
      </div>
    </div>
  )
}

export default Footer