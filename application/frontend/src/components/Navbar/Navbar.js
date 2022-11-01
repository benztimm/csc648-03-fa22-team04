import { useRef } from "react";
import { FaBars, FaTimes} from "react-icons/fa";
import "../pages/styles/main.css"

import logo from '../images/gatorExchange.png'

function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <h3> <img src={logo} className="img-fluid"></img> </h3>
            <nav ref= {navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>Search</a>
                <a href='/#'>About Me</a>
                <a href='/#'>Register</a>
                <a href='/#'>Log In</a>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;