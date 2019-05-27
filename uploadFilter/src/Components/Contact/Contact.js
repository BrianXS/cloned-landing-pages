import React, { Component } from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import "./Contact.css";


class Contact extends Component {
    render(){
        return(
            <div className="Contact">
                <div className="container">
                    <Header title="Contact Us" description="Whether You Have A General Question"/>
                    <div className="row contactForm">
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="FirstName LastName"/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="E-Mail address"/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="Phone"/>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <input type="text" placeholder="How did you hear about us?"/>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <textarea rows="8" placeholder="Please submit your request here"></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <input type="checkbox" name="terms"/>
                            <p>
                                I agree with receiving information and offers concerning uploadfilter.io's products and services. I accept the websites privacy policy.
                            </p>
                            <Button address="#" text="Send Contact Request"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;