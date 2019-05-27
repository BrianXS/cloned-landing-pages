import React, { Component } from "react";
import "./Button.css"

class Button extends Component {
    render(){
        return(<a className="buttonComponent" href={this.props.address}>{this.props.text}</a>)
    }
}

export default Button;