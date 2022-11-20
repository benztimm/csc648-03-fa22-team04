import React, { useState, useEffect, useContext } from 'react'; 
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';

import '../pages/styles/productPage.css';
import myImage from '../images/gatorExchange.png';
import PurchaseMsg from './PurchaseMsg.js';
import profilePic from '../images/testimage.jpg';


function productPage() {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    //fetch api
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    // declare the async data fetching function
    const fetchData = async () => {
        // get the data from the api
        const data = await fetch(`http://54.200.101.218:5000/get-post-details/${location.state.id}`);
        // convert the data to json
        const json = await data.json();

        // set state with the result
        console.log(json);
        setItems(json);

    }

    useEffect(() => {
        fetchData();
        console.log(items);
      }, [])

    const media = items;

    return(


        <div>{items && items.output.map(output => (
            <div className='page-container'>
                    <div className='img-container'>
                    <img className='product-image' src = {output.file}></img>
                </div>
        
                <div className='seller-card'>
                    <div className='title-container'>
                    <h1 className='title'>{output.title}</h1>
                    </div>
        
                    <div className='seller-profile'>
                        <img src={profilePic} width={100} height={100}></img>
                        <h2 className='seller-name'>{output.uploader_name}</h2>
                    </div>
                    <div className='about-item'>
                        <p>
                            Date posted: {output.created_timestamp} <br/>
                            Price: ${output.price}
                        </p>
                        <p className='description'>{output.description}</p>
                    </div>
                    <div className='footer-buttons'>
                        
                        <button className='purchase-bttn' onClick={() => setIsOpen(true)}>
                            CONTACT SELLER
                        </button>
                       {isOpen && <PurchaseMsg setIsOpen={setIsOpen} />}
                    </div>
                </div>
                </div>

        ))}</div>



    );
}

export default productPage;
