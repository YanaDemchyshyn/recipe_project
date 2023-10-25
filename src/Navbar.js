import React from "react";
import "./Navbar.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contacts from '../src/components/Contact';
import Recipe from "./components/Recipe";

function Navbar() {
    return (
<div className='container-fluid'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
<div className="container navMenu">
    <Link to="/" className="navbar-brand">
        <i class="fa-solid fa-bowl-rice icon"> recipe</i>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to="/" className="list">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/About" className="list">About</Link>
        </li>
        <li className="nav-item">
            <Link to="/Recipe" className="list">Recipe</Link>
        </li>
        <li className="nav-item">
            <Link to="/Contacts" className="list">Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <Routes>
     <Route path='/' element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Recipe" element={<Recipe />} />
     <Route path="/Contacts" element={<Contacts />} />
  </Routes>
      </div>
    );
}
export default Navbar
