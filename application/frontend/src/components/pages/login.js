import React from 'react';
import './styles/forms.css';

function Login() {
    return (
        <form>
            <div class="forms">LOGIN<hr></hr>
                <label>
                    Email*<br></br>
                    <input type="email" name="email" required class="forms"/>
                </label><br/><br/>
                <label>
                    Password*<br/>
                    <input type="password" name="password" required class="forms"/>
                </label><br/>
                <u>Forgot Password?</u>
            <br/><br/><br/>
            <input type="cancel" value="Cancel" />&nbsp;
            <input type="submit" value="Login" />
            <br/>
            New User? <u>Register</u>
            </div>
        </form>
    );
}

export default Login;