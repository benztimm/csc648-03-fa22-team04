/* 
Filename: UploadPost.js

Date: 11/20/22
Authors: Sophia Chu
Description: Page for users to upload files and enter file's information/price

*/

import React from 'react';
import './styles/forms.css';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';


function UploadPost() {


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

                <form>
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
                    <button className='upload-submit-button' type="submit" >SUBMIT</button>
                    <button className='upload-cancel-button' type='cancel'>CANCEL</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default UploadPost;