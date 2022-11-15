import React from 'react';
import './styles/forms.css';

function Register() {
    return (
        <form>
            <div class="forms">Register<hr></hr>
                <label>
                    First Name*<br></br>
                    <input type="fname" name="fname" required class="forms"/>
                </label><br/><br/>
                <label>
                    Last Name*<br></br>
                    <input type="lname" name="lname" required class="forms"/>
                </label><br/><br/>
                <label>
                    SFSU Email*<br></br>
                    <input type="email" name="email" required class="forms"/>
                </label><br/><br/>
                <label>
                    Password*<br/>
                    <input type="password" name="password" required class="forms"/>
                </label><br/><br/>
                <label>
                    Confirm Password*<br/>
                    <input type="password" name="cpassword" required class="forms"/>
                </label><br/><br/>
                <div>
                    <input type="checkbox" required/><u>I agree to terms and conditions.</u>
                </div>
            <br/><br/><br/>
            <input type="cancel" value="Cancel" />&nbsp;
            <input type="submit" value="Confirm" />
            <br/>
            Already Registered? <u>Login</u>
            </div>
        </form>
    );
}

export default Register;