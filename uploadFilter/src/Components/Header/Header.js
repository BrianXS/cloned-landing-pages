import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
    render(){
        return(
            <div className="row headerTitle">
                <div className="col-lg-12">
                    <h6>{this.props.title}</h6>
                </div>
                <div className="col-lg-12">
                    <h2>{this.props.description}</h2>
                </div>
            </div>
        )
    }
}

export default Header;