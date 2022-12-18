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
    const [categories, setCategories] = useState([]);

    const changeHandlerCategory = (e) => {
        let newCat = e.target.value;
        setSelectedOption(newCat);
    };

    useEffect(() => {
        fetch(`http://54.200.101.218:5000/get-category/`, {
            method: 'GET',
            headers: {
              'user': '0',
            }
          })
            .then(response => response.json())
            .then(data => setCategories(data.output));
    }, []);
    //END CATEGORY SELECTOR

    // SEARCH BAR

    const [focused, setFocused] = useState(false);


    const [searchTerm, setSearchTerm] = React.useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        // limit the input to 40 alphanumeric characters
        if (/^[a-zA-Z0-9]{0,40}$/.test(inputValue)) {
            setSearchTerm(inputValue);
        }
    };

    const handleSearch = () => {
        // perform the search with the current search term
        console.log(`Searching for: ${searchTerm}`);
        fetchData();
    };

    const [isActive, setIsActive] = useState(false);
    const [alert, setAlert] = useState('');



    // END SEARCH BAR


    //fetch api
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    //GET request from search bar input
    const fetchData = async () => {

        const data = {'data': await fetch(`http://54.200.101.218:5000/search-posts/?keyword=${searchTerm}&type=&category=${selectedOption}`)};
        const json = {'json': await data.data.json()};
        json['status'] = "Here are your search results.";
        if (json.json['output'].length === 0){
            data.data = await fetch(`http://54.200.101.218:5000/home-page/`);
            json.json = await data.data.json();
            json['status'] = "Your search yielded no results. Here are some recent ones."
        }
        console.log(json.json);
        setItems(json.json);
        window.localStorage.setItem('result', JSON.stringify(json.json));
        window.localStorage.setItem('status', JSON.stringify(json.status));
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
        const first_name = user.user.first_name;


        const logoutFunction = async () => {
            const data = await fetch(`http://54.200.101.218:5000/logout/${user.user.user_id}`);
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
                    
                    <Link to="/">
                        <img src={logo} className="img-fluid" onClick={() => setShowLinks(false)}
                        width={125} height={120}></img>
                    </Link>
                    <div className='nav_search_bar'>
                    <select className='cat-Select' onChange={changeHandlerCategory}>
                    <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option value={category.category_name}>{category.category_name}</option>
                                ))}
                            </select>
    
                        
                        <input type="text" placeholder="Search..." onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}

                            value={searchTerm} onChange={handleInputChange} onKeyPress={(event) => {
                                
                                if (event.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                        />
                        {focused && searchTerm === "" && (
                            <div className="searchBarAlert" >Please enter a search term</div>
                        )}
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    
                </div>
    
                <div className='right_side'>
                    
                    <div className='nav_links' id={showLinks ? "hidden" : ""} onClick={() => setShowLinks(false)}>
                        <HoverLink initialText={"Welcome "+ first_name} hoverText="To Dashboard" />
                        <a href='/#'><Link to="/Upload">Upload</Link></a>
                        {isRegisterOpen && <Register setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen}/>}
                        <a onClick={logoutFunction} type='submit'>Logout</a>
                        {isLoginOpen && <Login setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} c/>}
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
                <Link to="/">
                    <img src={logo} className="img-fluid" onClick={() => setShowLinks(false)}
                    width={125} height={120}></img>
                </Link>
                <div className='nav_search_bar'>
                <select className='cat-Select' onChange={changeHandlerCategory}>
                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option value={category.category_name}>{category.category_name}</option>
                                ))}
                            </select>
                    <input type="text" placeholder="Search..." onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}

                        value={searchTerm} onChange={handleInputChange} onKeyPress={(event) => {
                            // if the user presses the Enter key, perform the search
                            if (event.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    {focused && searchTerm === "" && (
                        <div className="searchBarAlert" >Please enter a search term</div>
                    )}
                    <button onClick={handleSearch}>Search</button>
                </div>
                
            </div>

            <div className='right_side'>
                
                <div className='nav_links' id={showLinks ? "hidden" : ""} onClick={() => setShowLinks(false)}>
                    <a href='/#'><Link to="/About">About</Link></a>
                    <a href='/#'><Link to="/Upload">Upload</Link></a>
                    <a onClick={() => setRegisterOpen(true)}>Register</a>
                    {isRegisterOpen && <Register setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen} setUserLogin={setUserLogin}/>}
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