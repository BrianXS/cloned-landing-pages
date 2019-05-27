import React, { Component } from "react";

import Navigation from "../Navigation/Navigation"
import Slogan from "../Slogan/Slogan"

import "./Banner.css";

class Banner extends Component {
    render(){
        return(
        <div className="banner">
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <Slogan />
            </div>
        </div>
        )
    }
}

export default Banner;