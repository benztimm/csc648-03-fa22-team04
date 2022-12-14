/* 
Filename: ProductPage.js

Date: 11/20/22
Authors: Sophia Chu
Description: Displays single item with item information.

*/
import React, { useState, useEffect, useContext } from 'react'; 
import { Document, Page } from 'react-pdf';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import '../pages/styles/productPage.css';
import PurchaseMsg from './PurchaseMsg.js';
import profilePic from '../images/testimage.jpg';


function productPage() {

    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {

        // const data = await fetch(`http://54.200.101.218:5000/get-post-details/${location.state.id}`);
        const data = await fetch(`http://54.200.101.218:5000/get-post-details/${window.sessionStorage.getItem('post_id')}`);
        const json = await data.json();

        console.log(json);
        setItems(json);

    }

    useEffect(() => {
        fetchData();
        console.log(window.sessionStorage.getItem('post_id'));
      }, [])

    const media = items;

    //if(items && items.output.post_type === "Document") {
        return(


            <div>{items && items.output.map(output => (
                <div className='page-container'>
                        <div className='img-container'>
                        <Document file={output.file} workerSrc={null} disableWorker={true}>
                            <Page pageNumber={1}/>
                        </Document>
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
                           {isOpen && <PurchaseMsg setIsOpen={setIsOpen} output={output}/>}
                        </div>
                    </div>
                    </div>
    
            ))}</div>
    
    
    
        );
    //}

    return(


        <div>{items && items.output.map(output => (
            <div className='page-container'>
                    <div className='img-container'>
                    <img className='product-image' src = {output.thumbnail}></img>
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
                       {isOpen && <PurchaseMsg setIsOpen={setIsOpen} output={output}/>}
                    </div>
                </div>
                </div>

        ))}</div>



    );
}

export default productPage;
