import React from 'react';
import './styles/forms.css';
import { RiCloseLine } from "react-icons/ri";

const Login = ({setLoginOpen}) =>{

    return (
        <>
        <div className='darkBG' onClick={() => setLoginOpen(false)}/>
            <div className='form-container-lr'>
            <div className='modal-form'>
                <form className="forms"><h1>LOGIN</h1><hr></hr>
                    <label>
                        Email*<br></br>
                        <input type="email" name="email" required className="forms" />
                    </label><br /><br />
                    <label>
                        Password*<br />
                        <input type="password" name="password" required className="forms" />
                    </label><br />
                    <u>Forgot Password?</u>
                    <br /><br /><br />
                    <input type="submit" value="Login" />
                    <br />
                    New User? <u>Register</u>

            </form>
            </div>
            <button className='cancel-button-lr' onClick={() => setLoginOpen(false)}>CANCEL</button>
            </div>


    </>
    );
}

export default Login;