import React, { useState, useEffect, useContext } from 'react'; 
import { Link, useNavigate, useHistory, generatePath } from 'react-router-dom';

import '../pages/styles/productPage.css';
import myImage from '../images/thumbnail.png';
import PurchaseMsg from '../pages/purchaseMsg.js';
import profilePic from '../images/testimage.jpg';


function productPage() {

    const [isOpen, setIsOpen] = useState(false);
    
    return(

    <div className='page-container'>

        <div className='img-container'>
            <img src = {myImage}></img>
        </div>

        <div className='seller-card'>
            <h1 className='title'> TITLE </h1>
            <div className='seller-profile'>
                <img src={profilePic}></img>
                <h2 className='seller-name'> Username </h2>
            </div>
            <div className='about-item'>
                <h1>Date posted: </h1>
                <p className='description'>Description here by the author</p>
            </div>
            <div className='footer-buttons'>
                
                <button className='purchase-bttn' onClick={() => setIsOpen(true)}>
                    CONTACT SELLER
                </button>
               {isOpen && <PurchaseMsg setIsOpen={setIsOpen} />}
                <button className='cancel-bttn'>CANCEL</button>
            </div>
        </div>

    </div>
    );
}

export default productPage;
