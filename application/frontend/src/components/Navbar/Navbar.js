/* 
Filename: Navbar.js

Date: 11/20/22
Authors: Ruben Ponce, Sophia Chu
Description: File for navigation bar. Includes search bar functionality that makes GET request,
returns API response.

*/


import React from 'react';
import { useContext, useRef, useState, useHistory, useEffect } from 'react'; 
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link, useNavigate, generatePath, Navigate} from 'react-router-dom';
import '../Navbar/Navbar.css';
import logo from '../images/logo.png'
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';



const Navbar = () =>{

    // CATEGORY SELECTOR
    const [selectedOption, setSelectedOption] = useState('');

    const changeHandlerCategory = (e) => {
        let newCat = e.target.value;
        setSelectedOption(newCat);
    };
    //END CATEGORY SELECTOR

    // SEARCH BAR

    //Set input value as value
    const [value, setValue] = useState('');
    const changeHandler = (event) => {
        //let newValue = event.target.value;
        setValue(event.target.value);
    };
    // END SEARCH BAR


    //fetch api
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    //GET request from search bar input
    const fetchData = async () => {

        const data = await fetch(`http://54.200.101.218:5000/search-posts/${selectedOption} ${value}`);

        const json = await data.json();

        console.log(json);
        setItems(json);
        window.localStorage.setItem('result', JSON.stringify(json));
        console.log(window.localStorage.getItem('result'));
        navigate('/searchresults');
    }


    //when search button is clicked
    const searchClick = () => {
        fetchData();
    }
    //END SEARCH BAR


    //LOGIN
    const [isLoginOpen, setLoginOpen] = useState(false);
    
    //REGISTER
    const [isRegisterOpen, setRegisterOpen] = useState(false);


    const [showLinks, setShowLinks] = useState(false);

    return(
        <div className='Navbar'>
            
            <div className='left_side'>
                {/* <button>sidebarhere</button> */}
                <Link to="/">
                    <img src={logo} className="img-fluid" onClick={() => setShowLinks(false)}
                    width={125} height={120}></img>
                </Link>
                <div className='nav_search_bar'>
                    <select  className='cat-Select' onChange={changeHandlerCategory}>
                        <option value="">Category</option>
                        <option value="Photography" >Photography</option>
                        <option value="Computer Science" >Computer Science</option>
                        <option value="Art" >Art</option>
                        <option value="Travel" >Travel</option>
                    </select>

                    <input onChange={changeHandler} type="text" placeholder="Search..."/>
                    <button onClick={searchClick}>Search</button>
                </div>
                
            </div>

            <div className='right_side'>
                
                <div className='nav_links' id={showLinks ? "hidden" : ""} onClick={() => setShowLinks(false)}>
                    <a href='/#'><Link to="/About">About</Link></a>
                    <a href='/#'><Link to="/Upload">Upload</Link></a>
                    <a onClick={() => setRegisterOpen(true)}>Register</a>
                    {isRegisterOpen && <Register setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen}/>}
                    <a onClick={() => setLoginOpen(true)}>Log In</a>
                    {isLoginOpen && <Login setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen}/>}
                    {/* <a href='/#'><Link to="/Register">Register</Link></a>
                    <a href='/#'><Link to="/Login">Log In</Link></a> */}
                </div>
                <button className='navButton' onClick={() => setShowLinks(!showLinks)}><FaBars/></button>
            </div>
            <p className='cc'> 
                    SFSU Software Engineering Project CSC648-848,
                    Fall 2022 for Demonstration Only
            </p>

        </div>
    );
}

export default Navbar;