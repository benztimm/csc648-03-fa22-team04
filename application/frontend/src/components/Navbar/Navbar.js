import { useRef } from "react"; 
import { FaBars, FaTimes} from "react-icons/fa";
import "../pages/styles/main.css"
import { Link } from 'react-router-dom';
import React from "react";

import logo from '../images/gatorExchange.png'

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3> <img src={logo} className="img-fluid" width={125} height={120}></img> </h3>
            <nav ref= {navRef}>
                <a href="/#"><Link to="/">Home</Link></a>
                <a href='/#'>Register</a>
                <a href='/#'>Log In</a>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <input type="text" placeholder="Search..."/>
            <button>Search</button>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;