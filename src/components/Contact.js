import React from "react";
import Footer from "./Footer";
import profile from "./images/profile-photo.png"
import "./Contact.css"

export default function Contacts () {
    return(
        <div className="Contact-us">
            <h1 className="contact-title">Contact Us</h1>
            <div className="container">
                <div className="row contacts">
                    <div className="col-lg-6">
                        <img src={profile} alt="profile" className="contact-photo img-fluid"></img>
                    </div>
                    <div className="col-lg-6 contact-info">
                        <div className="name">Address
                        </div>
                        <div className="contact-type">
                            <i class="fa-solid fa-location-dot contact-icon"></i>
                            <span> 021 Hollywood Boulevard, Los Angeles</span>
                        </div>
                        <div className="name">Email
                        </div>
                        <div className="contact-type">
                            <i class="fa-solid fa-envelope contact-icon"></i>
                            <span> my.email@gmail.com</span>
                        </div>
                        <div className="name">Phone
                        </div>
                        <div className="contact-type">
                            <i class="fa-solid fa-phone contact-icon"></i>
                            <span> 021 3456 789</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
