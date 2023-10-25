import React from "react";
import Footer from "./Footer";
import "./Recipe.css"
import col1 from "./images/col1.png";
import col2 from "./images/col2.png";
import col3 from "./images/col3.png";
import shortline from "./images/shortline.png"

export default function Recipe () {
    return(
        <div className="recipe">
            <h1 className="recipe-collection">Recipe Collection</h1>
            <div className="container my-recepies">
                <div className="row recipe-list">
                    <div className="col-lg-12 recipe-img">
                        <img src={col1} alt="recipe" className="recipe-pic img-fluid"></img>
                        <div className="recipe-name">Wet Vegetable Spring Rolls</div>
                    </div>
                    <div className="col-lg-6 recipe-info">
                        <h2 className="ingridients">Ingredient</h2>
                        <div className="ingridients-list">
                            <div className="ingr">350g spaghetti or linguine</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">140g pack diced pancetta, or smoked streaky bacon</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">2 stp olive oil</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">1 garlic clove, crushed</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">1 egg, plus 4 yolks</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">50g parmesan, grated</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 recipe-info">
                        <h2 className="method">Method</h2>
                        <div className="step">Step 1</div>
                            <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut.</p>
                        <div className="step-two">Step 2</div>
                            <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut massa sollicitudin in risus</p>
                    </div>
                    <div className="col-lg-12 recipe-img">
                        <img src={col2} alt="recipe" className="recipe-pic img-fluid"></img>
                        <div className="recipe-name">Wet Vegetable Spring Rolls</div>
                    </div>
                    <div className="col-lg-6 recipe-info">
                    <h2 className="ingridients">Ingredient</h2>
                        <div className="ingridients-list">
                            <div className="ingr">350g spaghetti or linguine</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">140g pack diced pancetta, or smoked streaky bacon</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">2 stp olive oil</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">1 garlic clove, crushed</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">1 egg, plus 4 yolks</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">50g parmesan, grated</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 recipe-info">
                        <h2 className="method">Method</h2> 
                        <div className="step">Step 1</div>
                            <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut.</p>
                        <div className="step-two">Step 2</div>
                            <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut massa sollicitudin in risus</p>
                    </div>
                    <div className="col-lg-12 recipe-img">
                        <img src={col3} alt="recipe" className="recipe-pic img-fluid"></img>
                        <div className="recipe-name">Wet Vegetable Spring Rolls</div>
                    </div>
                    <div className="col-lg-6 recipe-info">
                    <h2 className="ingridients">Ingredient</h2>
                    <div className="ingridients-list">
                            <div className="ingr">350g spaghetti or linguine</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">140g pack diced pancetta, or smoked streaky bacon</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">2 stp olive oil</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">1 garlic clove, crushed</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">1 egg, plus 4 yolks</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                            <div className="ingr">50g parmesan, grated</div>
                            <img src={shortline} alt="underline" className="shortline img-fluid"></img>
                        </div>
                    </div>
                    <div className="col-lg-6 recipe-info">
                        <h2 className="method">Method</h2>
                        <div className="step">Step 1</div>
                            <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut.</p>
                        <div className="step-two">Step 2</div>
                            <p>Nisl faucibus quis urna nibh ut amet diam suscipit pretium massa sollicitudin in risus in sagittis nisl faucibus quis urna nibh ut massa sollicitudin in risus</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
