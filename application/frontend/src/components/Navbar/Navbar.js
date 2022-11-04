import { useContext, useRef, useState } from "react"; 
import { FaBars, FaTimes} from "react-icons/fa";
import "../pages/styles/main.css"
import { Link, useNavigate } from 'react-router-dom';
import React from "react";

import logo from '../images/gatorExchange.png'
import { SearchContext } from '../../SearchContext.js';



function Navbar() {
    const navigate = useNavigate();
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    //search bar query
    const [value, setValue] = useContext(SearchContext);
    
    //put input into value ^
    const onChange = (event) => {
        setValue(event.target.value);
    }

    //when search button is clicked
    const onSearch = (searchTerm) => {
        console.log(value);
        navigate('/searchresults?q=' + value);
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

            <input value={value} onChange={onChange} type="text" placeholder="Search..."/>
            <button onClick={() => onSearch(value)}>Search</button>

            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>

        </header>
    );
}

export default Navbar;