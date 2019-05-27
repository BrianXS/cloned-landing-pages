import React, { Component } from "react";
import "./FeatureItem.css"

class FeatureItem extends Component {
    render(){
        return(
            <div className="row featureItem">
                <div className="col-lg-2 col-md-4 col-sm-3 col-3">
                    <img src={this.props.image} alt={this.props.title} />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-9 col-9">
                    <h5>{this.props.title}</h5>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default FeatureItem;