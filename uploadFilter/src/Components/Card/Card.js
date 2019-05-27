import React, { Component } from "react";
import "./Card.css"

class Card extends Component {
    render(){
        let extraOffset = this.props.offset === true ? "normalOffset" : "extraOffset";
        return(
            <div className={"col-lg-5 col-md-5 col-sm-12 col-11 cardComponent " + extraOffset}>
                <div>
                    <img src={this.props.source} alt=""/>
                </div>
                <div>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Card;