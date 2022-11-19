import React from 'react';
import './styles/loginRegister.css';
import { RiCloseLine } from "react-icons/ri";



const Register = ({setRegisterOpen}) =>{

    return (
        <>
            <div className='darkBG' onClick={() => setRegisterOpen(false)} />

            <div className='form-container-lr'>
                <div className='modal-form'>
                    <form className="forms"><h1>Register</h1><hr></hr>
                        <label>
                            First Name*<br></br>
                            <input type="fname" name="fname" required className="forms" />
                        </label><br /><br />
                        <label>
                            Last Name*<br></br>
                            <input type="lname" name="lname" required className="forms" />
                        </label><br /><br />
                        <label>
                            SFSU Email*<br></br>
                            <input type="email" name="email" required className="forms" />
                        </label><br /><br />
                        <label>
                            Password*<br />
                            <input type="password" name="password" required className="forms" />
                        </label><br /><br />
                        <label>
                            Confirm Password*<br />
                            <input type="password" name="cpassword" required className="forms" />
                        </label><br /><br />
                        <div>
                            <input type="checkbox" required /><u>I agree to terms and conditions.</u>
                        </div>
                        <br /><br />
                        <input type="submit" value="Confirm" />
                        <br />
                        Already Registered? <u>Login</u>

                </form>
                </div>
                <div><button className='cancel-button-lr' onClick={() => setRegisterOpen(false)}>CANCEL</button></div>

            </div>



        </>
    );
}

export default Register;