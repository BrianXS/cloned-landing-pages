import React, { Component } from "react";
import Header from "../Header/Header";
import Card from "../Card/Card";

import FeatureOne from "../../Assets/Card-5.svg"
import featureTwo from "../../Assets/Feature-4.svg"
import "./SecondaryFeatures.css";

class SecondaryFeatures extends Component{
    render(){
        return(
            <div className="secondaryFeatures">
                <div className="container">
                    <Header title="CUSTOM"
                    description="Talk to us about"/>
                </div>
                <div className="container cardContainer">
                    <div className="row">
                        <Card offset={true}
                        source={FeatureOne} 
                        title="GDPR compliant" 
                        description="We make sure your data is processed 
                        correctly, according to the new European 
                        data protection regulation."/>
                        <Card offset={false}
                        source={featureTwo} 
                        title="GDPR compliant" 
                        description="We make sure your data is processed 
                        correctly, according to the new European 
                        data protection regulation."/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SecondaryFeatures;