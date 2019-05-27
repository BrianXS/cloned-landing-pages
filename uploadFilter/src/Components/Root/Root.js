import React, { Component } from "react";

import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import SecondaryFeatures from "../SecondaryFeatures/SecondaryFeatures";
import Faq from "../FAQ/Faq";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import CardOne from "../../Assets/Card-1.svg"
import CardTwo from "../../Assets/Card-2.svg"
import CardThree from "../../Assets/Card-3.svg"
import CardFour from "../../Assets/Card-4.svg"

class Root extends Component {
    render(){
        return(
            <div>
                <Banner />
                <div className="container cardContainer">
                    <div className="row">
                        <Card offset={true}
                         source={CardOne} 
                         title="Scalable & fast" 
                         description="The API always provides 
                         you with enough performance, no matter 
                         how high or low your request volume might be."/>
                        <Card offset={false}
                         source={CardTwo} 
                         title="Easy to use API" 
                         description="Our API returns moderation 
                         results in convenient JSON format, that 
                         is easy to integrate in any application."/>
                        <Card offset={true}
                         source={CardThree} 
                         title="Highly accurate" 
                         description="We are only using state-of-the-art 
                         technology and are constantly improving the 
                         accuracy of our nudity recognition API."/>
                        <Card offset={false}
                         source={CardFour} 
                         title="GDPR compliant" 
                         description="We make sure your data is processed 
                         correctly, according to the new European 
                         data protection regulation."/>
                    </div>
                </div>
                <Features />
                <Pricing />
                <SecondaryFeatures />
                <Faq />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Root;