import React, { Component } from "react";
import Button from "../Button/Button";

import terminal from "./terminal.png";
import "./Slogan.css";

class Slogan extends Component {
    render(){
        return(
            <div className="row slogan">
                <div className="col-lg-7 col-md-7">
                    <h1>Image Nudity Detection API</h1>
                    <p>uploadfilter.io offers you a powerful & 
                    realtime JSON REST API that detects nudity images!</p>
                    <Button address="#" text="Get Started For Free"/>
                </div>
                <div className="col-lg-5 col-md-5">
                    <img src={terminal} alt=""/>
                </div>
            </div>
        )
    }
}

export default Slogan;