import React from "react";
import Visa from '../../assets/Visa.png'
import './contact.css'

const Contact = () => {
    return (
        <div className="ContactUs">
            <section id="contact">
                <div className="container title">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0 title">Contact Us</h3>
                            <h1 className="display-6  text-center mb-4">
                                Ask some <b>Questions.</b>
                            </h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row " >
                        <div className="col-md-6">
                            <img src={Visa} alt="contact us" className="h-50 img" />
                        </div>
                        <div className="col-md-4">
                            <form action="">
                                <div className="mb-3">
                                    <label for="email" className="form-label name">Your name</label>
                                    <input type="text" className="form-control" id="email" placeholder="John Doe"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email address</label>
                                    <input type="text" className="form-control" id="name" placeholder="name@exemple.ca"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="message" className="form-label">Your Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                            </form>
                            <button type="submit" className="btn btn-outline-primary">Send a Message<i className="fa fa-paper-plane ms-2"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
