import React from 'react';
import { useContext, useRef, useState, useHistory, useEffect } from 'react'; 
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link, useNavigate, generatePath} from 'react-router-dom';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import '../Navbar/Navbar.css';

import logo from '../images/gatorExchange.png'
import { SearchContext } from '../../SearchContext.js';




function Navbar() {

    // CATEGORY SELECTOR
    const animatedComponents = makeAnimated();
    const Categories = [
        { label: "Category 1", value: 1 },
        { label: "Category 2", value: 2 },
        { label: "Category 3", value: 3 },
      ];


    // SEARCH BAR
    // search bar query
    const {value, setValue} = useContext(SearchContext);

    // set global variable as search query
    const changeHandler = event => setValue(event.target.value);
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    
    const fetchAPI = async () => {
        const res = await fetch(`http://54.200.101.218:5000/data-parameters/${value}`)      
        .then(res => res.json())
        .then(
          
          (result) => {
            setIsLoaded(true);
            setItems(result);
            window.sessionStorage.setItem('result', result);
            console.log(result);
  
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
            //navigate(0);
          })
      };

    // when search button is clicked
    const onSearch = (value) => {
        //changeHandler();
        console.log(value);
        window.sessionStorage.setItem('value', value);

        //navigate('/searchresults?q=' + value);
        const path = generatePath("/searchresults?q=:input", {
            input: window.sessionStorage.getItem('value'),
        });
        fetchAPI();
        navigate(path);
    };
    //END SEARCH BAR

    //NAVIGATION
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }


    return(
        <header>
            <h3> <img src={logo} className="img-fluid" width={125} height={120}></img> </h3>

            <div className="category-select">
                <Select options={Categories} components={animatedComponents} isMulti />
            </div>

            <input value={value} onChange={changeHandler} type="text" placeholder="Search..."/>
            <button onClick={() => onSearch(value)}>Search</button>

            <div>
                <nav ref= {navRef}>
                    <a href="/#"><Link to="/">Home</Link></a>
                    <a href='/#'><Link to="/About">About</Link></a>
                    <a href='/#'>Register</a>
                    <a href='/#'>Log In</a>
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                    

                </nav>

                <div>
                <p className='cc'> 
                    SFSU Software Engineering Project CSC648-848,
                    Fall 2022 for Demonstration Only
                </p>
                </div>
            </div>
            

            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>

            

        </header>
    );
}

export default Navbar;