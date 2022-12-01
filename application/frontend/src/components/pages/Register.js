/* 
Filename: Register.js

Date: 11/20/22
Authors: Sophia Chu
Description: File for Register modal linked in Navbar.js

*/

import React from 'react';
import { useContext, useRef, useState, useHistory, useEffect } from 'react'; 
import './styles/loginRegister.css';


const Register = ({setRegisterOpen, setLoginOpen}) =>{

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    //restrict registration to SFSU domains
    const allowedDomains = ['mail.sfsu.edu', 'sfsu.edu'];

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,password,confirmPassword);
    }


    //for the 'Already Registered? link'
    const login = () => {
        setRegisterOpen(false);
        setLoginOpen(true);

    }

    return (
        <>
            <div className='darkBG' onClick={() => setRegisterOpen(false)} />

            <div className='form-container-lr'>
                <div className='modal-form'>
                    <form className='forms'><h1>Register</h1><hr></hr>
                        <label>
                            First Name*<br></br>
                            <input type='text' id='firstName' required className='forms' value={firstName} onChange = {(e) => handleInputChange(e)}/>
                        </label><br /><br />
                        <label>
                            Last Name*<br></br>
                            <input type='text' id='lastName' required className='forms' value={lastName} onChange = {(e) => handleInputChange(e)}/>
                        </label><br /><br />
                        <label>
                            SFSU Email*<br></br>
                            <input type='email' id='email' required className='forms' value={email} onChange = {(e) => handleInputChange(e)}/>
                        </label><br /><br />
                        <label>
                            Password*<br />
                            <input type='password' id='password' required className='forms' value={password} onChange = {(e) => handleInputChange(e)}/>
                        </label><br /><br />
                        <label>
                            Confirm Password*<br />
                            <input type='password' id='confirmPassword' required className='forms' value={confirmPassword} onChange = {(e) => handleInputChange(e)}/>
                        </label><br /><br />
                        <div>
                            <input type='checkbox' required /><u>I agree to terms and conditions.</u>
                        </div>
                        <br /><br />
                        <button onClick={()=>handleSubmit()} type='button' className='confirm-bttn' >Register</button>
                        <br />
                        Already Registered? <a id='reg-or-log' onClick={login}>Login</a>

                </form>
                </div>
                <div><button className='cancel-button-lr' onClick={() => setRegisterOpen(false)}>CANCEL</button></div>

            </div>



        </>
    );
}

export default Register;