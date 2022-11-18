import React from 'react';
import './styles/forms.css';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';



function UploadPost() {




    return (
        <form className='upload-form-container'>
            <div className='upload-forms'>
                <div className='upload-header'>
                    <h1>UPLOAD YOUR ITEM</h1>
                    <hr className='line-upload'></hr>
                    <br />
                    <text><i>(All required fields are specified with an </i></text> <text style={{ color: 'red' }}><i>*</i></text> <text><i> )</i></text>
                    <br />
                    <br />
                </div>


                <div className='form-container'>
                    <label className='input-text-field'>
                        TITLE<text style={{ color: 'red' }}><i>*</i></text><br></br>
                        <input type="text" name="title" required className="forms" />
                    </label><br /><br />
                    <label className='input-text-field'>
                        MEDIA TYPE<text style={{ color: 'red' }}><i>*</i></text><br></br>
                        <select name="mtype" required class="forms">
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

                    <label for="file">
                        FILE<text style={{ color: 'red' }}><i>*</i></text><br></br>
                        <input type="file" name="file" required className="forms" />
                    </label><br /><br />

                    <br /><br />
                    <button className='upload-submit-button' type="submit" value="Submit">SUBMIT</button>
                </div>
            </div>
        </form>
    );
}

export default UploadPost;