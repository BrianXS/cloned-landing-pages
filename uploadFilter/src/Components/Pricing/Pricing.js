import React, { Component } from "react";
import Header from "../Header/Header";
import PriceCard from "../PriceCard/PriceCard";

import "./Pricing.css"

class Pricing extends Component {

    renderElements = (evt) => {
        let elements = document.getElementsByClassName("tab");
        
        for(let i = 0; i<elements.length; i++){
            elements[i].className = elements[i].className.replace("pillActive", "").trim();
        }

        evt.target.className += " pillActive"
    }

    render(){
        return(
            <div className="pricing">
                <div className="container">
                    <Header title="PRICING" description="Choose Your Plan" />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pills">
                                <div onClick={this.renderElements} className="tab pillActive">monthly billing</div>
                                <div onClick={this.renderElements} className="tab">annual billing</div>
                            </div>
                        </div>
                        <PriceCard tierName="Free"
                        price="$0"
                        featuresTitle="Try our nudity detection API for free!"
                        />
                        <PriceCard tierName="Basic"
                        price="$3,99"
                        featuresTitle="Higher volume & more features!"
                        />
                        <PriceCard tierName="Medium"
                        price="$15,99"
                        featuresTitle="What most of our customers buy!"
                        />
                        <PriceCard tierName="Professional"
                        price="$27,99"
                        featuresTitle="Best buy - Corporate features included!"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;