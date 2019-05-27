import React, { Component } from "react";
import Header from "../Header/Header";
import Question from "../Question/Question";

import "./Faq.css";

class Faq extends Component {
    render(){
        return(
            <div className="faq">
                <div className="container">
                    <Header title="FAQ" description="Frequently Ask Questions"/>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Question title="Can I also pay yearly?"
                            description="Yes, of course. We also offer you a 20% discount if you request an annual subscription plan." />
                            <Question title="Will request errors be counted towards my monthly limit?" 
                            description="Yes, of course. We also offer you a 20% discount if you request an annual subscription plan." />
                            <Question title="Which payment methods are supported?" 
                            description="Yes, of course. We also offer you a 20% discount if you request an annual subscription plan." />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Question title="What is the API's uptime?"
                            description="Yes, of course. We also offer you a 20% discount if you request an annual subscription plan." />
                            <Question title="What is the difference between free and paid subscriptions?" 
                            description="Yes, of course. We also offer you a 20% discount if you request an annual subscription plan." />
                            <Question title="What is uploadfilter.io?" 
                            description="Yes, of course. We also offer you a 20% discount if you request an annual subscription plan." />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;