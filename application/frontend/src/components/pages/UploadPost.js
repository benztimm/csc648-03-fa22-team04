import React from 'react';
import './styles/forms.css';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';



function UploadPost() {




    return (
        <form>
            <div class="forms"><h2>UPLOAD AN ITEM</h2><hr></hr>
                <br/>
                <label for="file">
                    FILE*<br></br>
                    <input type="file" name="file" required class="forms" placeholder='Choose File'/>
                </label><br/><br/>
                <label for="thumbnail">
                    THUMBNAIL*<br></br>
                    <input type="file" name="thumbnail" required class="forms" placeholder='Choose File'/>
                </label><br/><br/>
                <label>
                    TITLE*<br></br>
                    <input type="text" name="title" required class="forms" placeholder='Enter the title'/>
                </label><br/><br/>
                <label>
                    MEDIA TYPE*<br></br>
                    <select name="mtype" required class="forms">
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                        <option value="document">Document</option>I
                    </select>
                </label><br/><br/>

                <label>
                    DESCRIPTION<br/>
                    <textarea name="description" class="forms" placeholder='Enter the description' rows="4"/>
                </label><br/><br/>
                <label>
                    CATEGORY*<br></br>
                    <select name="category" required class="forms">
                        <option value="computerscience">Computer Science</option>
                        <option value="photography">Photography</option>
                        <option value="music">Music</option>I
                    </select>
                </label><br/><br/>
                <label>
                    PRICE<br/>
                    <input type="number" name="price" class="forms" placeholder='Enter the price'/>
                </label><br/><br/>

                
            <br/><br/>
            <input type="cancel" value="Cancel" />&nbsp;
            <input type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default UploadPost;