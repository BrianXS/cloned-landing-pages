import React, { Component } from "react";
import "./Navigation.css"
import logo from "./logo-light.svg"
import menu from "./menu-icon.png"

class Navigation extends Component {
    constructor(props){
        super(props);
        this.responsiveMenu = React.createRef();
        this.state = {
            isClicked: false
        };
    }

    openMenu = () => {
        this.setState({isClicked: !this.state.isClicked});
    }
    
    render(){
        let clickClass = this.state.isClicked ? "overlay-menu" : "";
        return(
            <div className="navigation">
                <div>
                    <a href="#home">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <div>
                    <button onClick={this.openMenu}>
                        <img src={menu} alt="logo" />
                    </button>
                </div>
                <div className={clickClass} ref="responsiveMenu">
                    <a href="#home" onClick={this.openMenu}>X</a>
                    <a href="#home">Home</a>
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#faq">FAQ</a>
                    <a href="#contact">Contact</a>
                    <a href="#docs">Documentation</a>
                    <a href="#login">Login</a>
                </div>
            </div>
        )
    }
}

export default Navigation;