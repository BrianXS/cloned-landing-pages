import React, { Component } from "react";
import Button from "../Button/Button";
import "./PriceCard.css"

class PriceCard extends Component {
    render(){
        return(
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="priceCard">
                    <div className="topDivision">
                        <h2>{this.props.tierName}</h2>
                        <h3>{this.props.price}<span> / month</span> </h3>
                        <Button text="Sign Up"/>
                    </div>
                    <div className="bottomDivision">
                        <p>{this.props.featuresTitle}</p>
                        <ul>
                            <li>2500 requests / month</li>
                            <li>Limited support</li>
                            <li>HTTPS encryption</li>
                            <li>Service Level Agreement</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PriceCard;