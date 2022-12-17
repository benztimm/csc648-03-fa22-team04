/* 
Filename: Login.js

Date: 11/20/22
Authors: Sophia Chu, Mahisha Patel
Description: File for Login modal linked in Navbar.js.

*/
import React from 'react';
import { useContext, useRef, useState, useHistory, useEffect } from 'react'; 
import { Link, useNavigate, generatePath, Navigate} from 'react-router-dom';
import './styles/forms.css';
import './styles/loginRegister.css';

const Login = ({setLoginOpen, setRegisterOpen, setUserLogin}) =>{

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const fetchData = async () => {

        //http://54.200.101.218:5000/login?email=testuser1@sfsu.edu&password=password
        
        const data = await fetch(`http://54.200.101.218:5000/login?username=${email}&password=${password}`);
        const json = await data.json();

        console.log(json);
        let loginReturn = json;
        setItems(loginReturn);
        console.log(json.message);


        if(json.message === "Login Successful!"){

            sessionStorage.setItem("user", JSON.stringify(json));
            //window.localStorage.setItem('user', `${email}`);
            setLoginOpen(false);
            //setUserLogin(true);

        }   

    }

    const handleSubmit  = (event) => {
        //ADD POST REQUEST HERE
        console.log(email,password);
        event.preventDefault();
        fetchData();
        
    }


    //for link "New User?"
    const register = () => {
        setLoginOpen(false);
        setRegisterOpen(true);
    }

    return (
        <>
        <div className='darkBG' onClick={() => setLoginOpen(false)}/>
            <div className='form-container-lr'>
            <div className='modal-form'>
                <form onSubmit={handleSubmit} className="forms"><h1>Login</h1><hr></hr>
                    <label>
                        Email<br></br>
                        <input type='email' id='email' name="email" required className="forms" onChange = {(e) => handleInputChange(e)}/>
                    </label><br /><br />
                    <label>
                        Password<br />
                        <input type='password' id='password' name='password' required className="forms" onChange = {(e) => handleInputChange(e)}/>
                    </label><br />
                    <u>Forgot Password?</u>
                    <br /><br /><br />
                    <button className='confirm-bttn' type='submit'>Login</button>
                    <br />
                    New User? <a id='reg-or-log' onClick={register}>Register</a>

                </form>
            </div>
            <button className='cancel-button-lr' onClick={() => setLoginOpen(false)}>CANCEL</button>
            </div>


    </>
    );
}

export default Login;