import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";


export default function Footer () {
    return(
        <div className="Footer">
            <div className="container">
                <div className="row footer-cont">
                    <div className="col-lg-4">
                        <div className="logo">
                            <Link to="/" className="logo-brand">
                                <i class="fa-solid fa-bowl-rice icon"> recipe</i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="social">
                        <a href="https://www.instagram.com/" target="blanc" className="social-link">
                            <i class="fa-brands fa-instagram link"></i>
                        </a>
                        <a href="https://uk-ua.facebook.com/" target="blanc" className="social-link">
                            <i class="fa-brands fa-square-facebook link"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="blanc" className="social-link">
                            <i class="fa-brands fa-linkedin link"></i>
                        </a>
                        </div>
                    </div>
                    <div className="col-lg-4 info">
                        <p className="text">© 2023 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}
