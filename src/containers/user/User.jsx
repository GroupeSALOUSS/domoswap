import { css } from '@emotion/core'
import React from 'react'

import ImagePP  from '../../assets/ImagePP.png'

export const User = () => {
    return (
        <>
            <div className='container emp-profile'>
                <form method=''>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-img'>
                                <img src={ImagePP} alt="PhotoProfile" />
                            </div>
                            
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>MouhaFiz Seck</h5>
                                <h6>Analyst-Programmer</h6>
                                <p className='profile-rating mt-3 mb-5'>RANKING <span>***</span></p>


                                     <ul class="nav nav-tabs" role="tablist">
                                        <li class="nav-item">
                                        <a className="nav-link active" id='home-tab' data-toggle="tab" href="#home" role="tab">About</a>
                                        </li>
                                        <li class="nav-item">
                                        <a className="nav-link active" id='profile-tab' data-toggle="tab" href="#profile" role="tab">Timeline</a>
                                        </li>                   
                                    </ul>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <input type="submit" className='profile-edit-btn' name='btnAddMore' value= 'Edit Profile' />
                        </div>
                        <div className='row'>
                            {/*left side url*/}
                            <div  className='col-md-4'>
                                <div className='profile-work'>
                                    <p>Work Link</p>
                                    <a href="https://www.youtube.com/c/GojiOnePiece" target= '_Goji'>Youtube</a> <br />
                                    <a href="https://www.instagram.com/" target="_27boie">Instagram</a> <br />
                                    <a href="https://twitter.com/home" target="_hafi">Tweeter</a> <br />
                                    <a href="https://github.com/" target="_git">Git Up</a>
                                </div>
                            </div>

                            {/*right side url*/}

                            <div className='col-md-8 pl-5 about-info'>
                                <div className='tab-content profile-tab' id='myTabContent'>
                                    <div className='tab-pane fade show active' id='home' role='tabpanel' aria-labelledby='home-tab'>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <label>User Id</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <p>40004555710</p>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-md-6'>
                                                <label>Name</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <p>Mouhafiz seck</p>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-md-6'>
                                                <label>Phone</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <p>418-455-5170</p>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-md-6'>
                                                <label>E-mail</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <p>mouhafi@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-md-6'>
                                                <label>Adresse</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <p>655 university Dr , Bathurst , Canada, E2A7K5</p>
                                            </div>
                                        </div>
                                        <div className='row mt-3'>
                                            <div className='col-md-6'>
                                                <label>Profession</label>
                                            </div>
                                            <div className='col-md-6'>
                                                <p>Etudiant</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class='tab-pane fade' id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                                        <div class='row'>
                                            <div class='col-md-6'>
                                                <label>Experience</label>
                                            </div>
                                            <div class='col-md-6'>
                                                <label>Expert</label>
                                            </div>
                                        </div>
                                        <div class='col-md-6'>
                                                <label>Comment</label>
                                            </div>
                                            <div class='col-md-6'>
                                                <label>Satisfied</label>
                                            </div>
                                    </div>
                                    <div class='col-md-6'>
                                                <label>Total Travel</label>
                                            </div>
                                            <div class='col-md-6'>
                                                <label>7</label>
                                            </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
export default User