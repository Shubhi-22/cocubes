import React from "react";
import "./Contact.css";
import Contact_ban from "./contact-ban.png";
import Form from "./Contact_form";

const Contact=()=>{
    return(
        <div classname="container-fluid">
            <div className="row">
            

                <div className="contact-container">
                <div className="col-6">
                <div className="newsletter">
                    <h1>Newslleter</h1><br/>
                    <h2>Get news about articles and updates in your inbox.</h2>
                </div>
                </div>
                <div className="col-6">
                    <Form/>
                </div>
                <div className="contact-ban"><img src={Contact_ban}></img></div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact; 