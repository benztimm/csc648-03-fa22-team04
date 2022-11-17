import React, { useState, useEffect, useContext } from 'react'; 
import { Link, useNavigate, useHistory, generatePath } from 'react-router-dom';

import '../pages/styles/productPage.css';
import myImage from '../images/gatorExchange.png';
import PurchaseMsg from '../pages/purchaseMsg.js';
import profilePic from '../images/testimage.jpg';


function productPage() {

    const [isOpen, setIsOpen] = useState(false);

    return(

    <div className='page-container'>

        <div className='img-container'>
            <img className='product-image' src = {myImage}></img>
        </div>

        <div className='seller-card'>
            <div className='title-container'>
            <h1 className='title'> TITLE </h1>
            </div>

            <div className='seller-profile'>
                <img src={profilePic} width={100} height={100}></img>
                <h2 className='seller-name'> Test Username </h2>
            </div>
            <div className='about-item'>
                <p>
                    Date posted: 11/13/2022 <br/>
                    Price: $5.00
                </p>
                <p className='description'>Description here by the author</p>
            </div>
            <div className='footer-buttons'>
                
                <button className='purchase-bttn' onClick={() => setIsOpen(true)}>
                    CONTACT SELLER
                </button>
               {isOpen && <PurchaseMsg setIsOpen={setIsOpen} />}
            </div>
        </div>

    </div>
    );
}

export default productPage;
