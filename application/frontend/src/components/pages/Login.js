/* 
Filename: Login.js

Date: 11/20/22
Authors: Sophia Chu, Mahisha Patel
Description: File for Login modal linked in Navbar.js.

*/
import React from 'react';
import { useContext, useRef, useState, useHistory, useEffect } from 'react'; 
import './styles/forms.css';
import './styles/loginRegister.css';

const Login = ({setLoginOpen, setRegisterOpen}) =>{

    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }

    }

    const handleSubmit  = () => {

        //ADD POST REQUEST HERE
        console.log(email,password);

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
                <form className="forms"><h1>Login</h1><hr></hr>
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
                    <button className='confirm-bttn' type='button' onClick={()=>handleSubmit()} >Login</button>
                    <br />
                    New User? <a id='reg-or-log' >Register</a>

            </form>
            </div>
            <button className='cancel-button-lr' onClick={() => setLoginOpen(false)}>CANCEL</button>
            </div>


    </>
    );
}

export default Login;