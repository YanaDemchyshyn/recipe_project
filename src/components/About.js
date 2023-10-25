import React from "react";
import Footer from "./Footer";
import "./About.css"
import profile from "./images/profile-photo.png"
import fav1 from "./images/fav1.png"
import fav2 from "./images/fav2.png"
import fav3 from "./images/fav3.png"

export default function About () {
    return (
    <div className="aboutMe">
        <div className="container">
            <h1 className="title-1">About Me</h1>
            <div className="row myInfo">
                <div className="col-lg-6 photo">
                    <img src={profile} alt="profile" className="img-fluid profilePhoto"></img>
                </div>
                <div className="col-lg-6 information">
                    <h2>Shelley White</h2>
                    <p>Nisl faucibus quis urna nibh ut amet diam 
                        suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus 
                    quis urna nibh ut amet  diam suscipit pretium massa, 
                    sollicitudin in risus in. Sagittis.</p>
                    <div className="followMe">
                    <div className="social follow"> 
                        <span>Follow me:</span>
                        <a href="https://www.instagram.com/" target="blanc" className="social-icon">
                            <i class="fa-brands fa-instagram link"></i>
                        </a>
                        <a href="https://uk-ua.facebook.com/" target="blanc" className="social-icon">
                            <i class="fa-brands fa-square-facebook link"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="blanc" className="social-icon">
                            <i class="fa-brands fa-linkedin link"></i>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <h2 className="title-2">Favorite Recipe</h2>
            <div className="row favorite">
                <div className="col-lg-4">
                    <img src={fav1} alt="favorite" className="img-fluid favorite"></img>
                    <h3>Wet Vegetable Spring Rolls</h3>
                    <p>Id ac lorem maecenas rhoncus lobortis turpis morbi. Id ut lobortis consectetur volutpat commodo mi suspendisse odio.</p>
                </div>
                <div className="col-lg-4">
                    <img src={fav2} alt="favorite" className="img-fluid favorite"></img>
                    <h3>Wet Vegetable Spring Rolls</h3>
                    <p>Id ac lorem maecenas rhoncus lobortis turpis morbi. Id ut lobortis consectetur volutpat commodo mi suspendisse odio.</p>
                </div>
                <div className="col-lg-4">
                    <img src={fav3} alt="favorite" className="img-fluid avorite"></img>
                    <h3>Wet Vegetable Spring Rolls</h3>
                    <p>Id ac lorem maecenas rhoncus lobortis turpis morbi. Id ut lobortis consectetur volutpat commodo mi suspendisse odio.</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}
