/* 
Filename: UploadPost.js

Date: 11/20/22
Authors: Sophia Chu
Description: Page for users to upload files and enter file's information/price

*/

import React, { useState } from 'react';
import './styles/forms.css';
import Modal from './modal';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import { AiOutlineArrowRight } from 'react-icons/ai';


function UploadPost() {

    const [isRedirectOpen, setRedirectOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isRegisterOpen, setRegisterOpen] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const mtype = event.target.mtype.value;
        const category = event.target.category.value;
        const description = event.target.description.value;
        if (event.target.price.value === null) {
            const price = 0;
        } else {
            const price = event.target.price.value;
        }

        const file = event.target.file.value;

        if (sessionStorage.getItem('user') === null) {
            setLoginOpen(true);
        } else if (title && mtype && category && file) {
            setRedirectOpen(true);
        }
    }



const toDashboard = () => {
    navigate('/dashboard');

}
//sessionStorage.getItem('user') !== null
//{isLoginOpen && <Login setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} setUserLogin={setUserLogin}/>}

return (
    <div className='upload-form-container'>
        <div className='upload-forms'>
            <div className='upload-header'>
                <h1>UPLOAD YOUR ITEM</h1>
                <hr className='line-upload'></hr>
                <br />
                <text><i>(All required fields are specified with an </i></text> <text style={{ color: 'red' }}><i>*</i></text> <text><i> )</i></text>
                <br />
                <br />
            </div>

            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <label className='input-text-field'>
                        TITLE<a style={{ color: 'red' }}><i>*</i></a><br></br>
                        <input type="text" name="title" required className="forms" />
                    </label><br /><br />
                    <label className='input-text-field'>
                        MEDIA TYPE<text style={{ color: 'red' }}><i>*</i></text><br></br>
                        <select name="mtype" required className="forms">
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                            <option value="document">Document</option>I
                        </select>
                    </label><br /><br />
                    <label className='input-text-field'>
                        CATEGORY<text style={{ color: 'red' }}><i>*</i></text><br></br>
                        <select name="category" required className="forms">
                            <option value="computerscience">Computer Science</option>
                            <option value="photography">Photography</option>
                            <option value="music">Music</option>I
                        </select>
                    </label><br /><br />

                    <label className='input-text-field'>
                        DESCRIPTION<br />
                        <textarea name="description" className="forms" rows="4" />
                    </label><br /><br />

                    <label className='input-text-field'>
                        PRICE<br />
                        <input type="number" name="price" className="forms" />
                    </label><br /><br />

                    <label>
                        FILE<text style={{ color: 'red' }}><i>*</i></text><br></br>
                        <input type="file" name="file" required className="forms" />
                    </label><br /><br />

                    <br /><br />
                    <div className='upload-note'>Note: May take up to 24hrs to approve the post</div>
                    <br />
                    <button className='upload-submit-button' type="submit" >SUBMIT</button>
                </div>
            </form>

        </div>
        {isRedirectOpen && <Modal setRedirectOpen={setRedirectOpen}>
            <div className='upload-modal-text'>
                Your submission was successful!<br />
                Please allow up to 24 hours for approval.<br />
            </div>
            <button className='go-to-uploads' onClick={toDashboard}>Go to My Uploads <AiOutlineArrowRight /></button>
        </Modal>}

        {isLoginOpen && <Login setLoginOpen={setLoginOpen} setRegisterOpen={setRegisterOpen} />}
        {isRegisterOpen && <Register setRegisterOpen={setRegisterOpen} setLoginOpen={setLoginOpen}/>}


    </div>
);
}


export default UploadPost;