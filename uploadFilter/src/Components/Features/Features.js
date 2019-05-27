import React, { Component } from "react";

import FeatureItem from "../FeatureItem/FeatureItem";

import phone from "../../Assets/iphone-x.jpg";
import "./Features.css";
import featureOne from "../../Assets/Feature-1.svg"
import featureTwo from "../../Assets/Feature-2.svg"
import featureThree from "../../Assets/Feature-3.svg"
import featureFour from "../../Assets/Feature-4.svg"

class Features extends Component {
    render() {
        return(
            <div className="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
                            <img src={phone} alt=""/>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 col-12">
                            <h2>Automatically check content for nudity!</h2>
                            <FeatureItem image={featureOne}
                            title="Protect your brand"
                            description="Detect and filter nude content and make sure undesired images do not make their way on to your platform." />
                            <FeatureItem image={featureTwo}
                            title="Save time by automating your approval process"
                            description="We offer you effortless integration and realtime image moderation, giving you more time for important things." />
                            <FeatureItem image={featureThree}
                            title="Maximum speed"
                            description="Our API is powered by strong infrastructure in order to withstand demanding workloads." />
                            <FeatureItem image={featureFour}
                            title="Save money"
                            description="Only pay what you need. Choose between our free or custom plan and let our servers do the work." />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features;