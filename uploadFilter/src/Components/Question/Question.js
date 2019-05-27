import React, { Component } from "react";
import "./Question.css"

class Question extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        }
    }
    
    displayDescription = () => {
        this.setState({ isOpen: !this.state.isOpen});
    };


    render(){
        let isDisplayed = this.state.isOpen ? "displayItem" : "";

        return(
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 question"> 
                <button onClick={this.displayDescription}>
                 <span>{this.props.title}</span>
                 
                </button>
                <p className={isDisplayed}>
                    {this.props.description}
                </p>
            </div>
        );
    }
}

export default Question;