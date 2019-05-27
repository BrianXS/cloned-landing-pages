import React, { Component } from "react";
import "./Footer.css"
import logo from "../../Assets/logo-light.svg"

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <img src={logo} />
                            <p>uploadfilter.io offers you a highly reliable nudity detection API.</p>
                            <p>© 2018 All rights reserved.</p>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <ul>
                            <li>Product</li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Registration</a></li>
                            <li><a href="#">Documentation</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <ul>
                            <li>Competition</li>
                            <li><a href="#">Sightengine</a></li>
                            <li><a href="#">Google Vision</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <ul>
                            <li>Company</li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Impressum</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms Of Service</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;