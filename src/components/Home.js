import React from "react";
import main from "./images/main.png";
import pic1 from "./images/pic1.png";
import pic2 from "./images/pic2.png";
import pic3 from "./images/pic3.png";
import pic4 from "./images/pic4.png";
import pic5 from "./images/pic5.png";
import pic6 from "./images/pic6.png";
import pic7 from "./images/pic7.png";
import pic8 from "./images/pic8.png";
import "./Home.css"
import Footer from "./Footer"

export default function Home() {
    return (
        <div className="home">
            <div className="main-img">
                <img src={main} alt="main" className="main-photo img-fluid"></img>
                <h1 className=" titleHome">Recipe Collection</h1>
                <p className="description">Find a variety of inspiring recipes that are easy, </p>
                <p className="description-second">delicious, and healthy here</p>
            </div>
            <div className="img-list">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 recipe-element">
                        <img src={pic1} alt="pic1" className="pic one img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic2} alt="pic2" className="pic two img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic3} alt="pic3" className="pic three img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic4} alt="pic4" className="pic four img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic5} alt="pic5" className="pic five img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic6} alt="pic6" className="pic six img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic7} alt="pic7" className="pic seven img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                    <div className="col-lg-6 recipe-element">
                        <img src={pic8} alt="pic8" className="pic eight img-fluid"></img>
                        <p>Wet Vegetable Spring Rolls</p>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
