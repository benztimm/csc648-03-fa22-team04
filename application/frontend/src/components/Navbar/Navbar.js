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
    const searchButtonRef = useRef();
    const [value, setValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
      }

    function changeHandler(event)  {
        const alphanumericRegex = /^[a-zA-Z0-9]+$/;
        const newValue = event.target.value;

        if (event.keyCode === 13) {
            searchButtonRef.current.click();
          }

        if (event.keyCode === 8 && event.target.selectionStart !== event.target.selectionEnd) {
            setValue(newValue);
            return;
        }

        if (alphanumericRegex.test(newValue)) {
        setValue(newValue);
        }
    };

    const [isActive, setIsActive] = useState(false);
    const [alert, setAlert] = useState('');

    useEffect(() => {
        if (value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }, [value]);

    // END SEARCH BAR


    //fetch api
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    //GET request from search bar input
    const fetchData = async () => {

        const data = await fetch(`http://54.200.101.218:5000/search-posts/?keyword=${value}&type=&category=${selectedOption}`);
        const json = await data.json();

        console.log(json);
        setItems(json);
        window.localStorage.setItem('result', JSON.stringify(json));
        navigate('/searchresults');
    }


    //when search button is clicked
    const searchClick = () => {
        console.log(value)
        fetchData();
    }
    //END SEARCH BAR


    //LOGIN
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isUserLoggedIn, setUserLogin] = useState(false);
    
    //REGISTER
    const [isRegisterOpen, setRegisterOpen] = useState(false);

    const [showLinks, setShowLinks] = useState(false);

    const [logout, setLogout] = useState(false);

    



    if(sessionStorage.getItem('user') !== null) {
        const user = JSON.parse(sessionStorage.getItem("user"));
        const email = user.user.email;
        console.log(email);

        const logoutFunction = async () => {
            const data = await fetch(`http://54.200.101.218:5000/logout/${user.output.user_id}`);
            const json = await data.json();
            console.log(json);
            
            setLogout(true);
            setUserLogin(false);
            window.sessionStorage.removeItem('user');
            navigate('/');
        };

        

        //function to change text when hovering over NavBar buttons
        function HoverLink({ initialText, hoverText }) {
            const [text, setText] = React.useState(initialText);
          
            return (
              <a onMouseEnter={() => setText(hoverText)} onMouseLeave={() => setText(initialText)}><Link to="/dashboard">
                {text}
              </Link></a>
            );
          }

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
                            <option value="">All Categories</option>
                            <option value="Photography" >Photography</option>
                            <option value="Computer Science" >Computer Science</option>
                            <option value="Art" >Art</option>
                            <option value="Travel" >Travel</option>
                        </select>
    
                        <input maxLength={40} value={value} onChange={handleChange} onKeyDown={changeHandler} type="text" placeholder="Search..."/>
                        {isActive && <div className="searchBarAlert">Please enter up to 40 characters.</div>}
                        <button onClick={searchClick} ref={searchButtonRef}>Search</button>
                    </div>
                    
                </div>
    
                <div className='right_side'>
                    
                    <div className='nav_links' id={showLinks ? "hidden" : ""} onClick={() => setShowLinks(false)}>
                        <HoverLink initialText={"Welcome "+ email} hoverText="To Dashboard" />
                        <a href='/#'><Link to="/Upload">Upload</Link></a>
                        {isRegisterOpen && <Register setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen}/>}
                        <a onClick={logoutFunction} type='submit'>Logout</a>
                        {isLoginOpen && <Login setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} setUserLogin={setUserLogin}/>}
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
                        <option value="">All Categories</option>
                        <option value="Photography" >Photography</option>
                        <option value="Computer Science" >Computer Science</option>
                        <option value="Art" >Art</option>
                        <option value="Travel" >Travel</option>
                    </select>

                    <input maxLength={40} value={value} onChange={handleChange} onKeyDown={changeHandler} type="text" placeholder="Search..."/>
                    {isActive && <div className="searchBarAlert">Please enter up to 40 characters.</div>}
                    <button onClick={searchClick} ref={searchButtonRef}>Search</button>
                </div>
                
            </div>

            <div className='right_side'>
                
                <div className='nav_links' id={showLinks ? "hidden" : ""} onClick={() => setShowLinks(false)}>
                    <a href='/#'><Link to="/About">About</Link></a>
                    <a href='/#'><Link to="/Upload">Upload</Link></a>
                    <a onClick={() => setRegisterOpen(true)}>Register</a>
                    {isRegisterOpen && <Register setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen}/>}
                    <a onClick={() => setLoginOpen(true)}>Login</a>
                    {isLoginOpen && <Login setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} setUserLogin={setUserLogin}/>}
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