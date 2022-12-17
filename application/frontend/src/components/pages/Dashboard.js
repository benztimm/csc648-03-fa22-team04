/* 
Filename: Dashboard.js

Date: 11/20/22
Authors: Sophia Chu, Mahisha Patel
Description: File for user dashboard. Displays user's uploaded media items.

*/

import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import './styles/dashboard.css';
import myImage from '../images/gatorExchange.png';
import ReactGA from 'react-ga';

function Dashboard(){

    useEffect(() => {
        console.log(window.location.pathname + window.location.search);
        try{
          ReactGA.pageview(window.location.pathname + window.location.search);
        }
        catch(e){
          console.error(e);
        }
        
      }, []);

    const navigate = useNavigate();
    const [items, setItems] = useState(null);

    const user = JSON.parse(sessionStorage.getItem('user'));
    const user_id = user.user.user_id;

    const fetchData = async () => {

        const data = await fetch(`http://54.200.101.218:5000/get-user-post/${user_id}`);
        const json = await data.json();

        console.log(json);
        setItems(json);
    }

    useEffect(() => {
        fetchData();
      }, [])

    const goToInbox = () => {
        navigate('/inbox');

    }
    return (
        <div className="dash-container">
            <div className="header">
                <h1>MY POSTS</h1>
            </div>
            <div class="dashboard">
                <button class="dashboard-myPost" >MY POSTS</button>&nbsp;&nbsp;&nbsp;
                <button class="dashboard" onClick={goToInbox}>INBOX</button>
            </div>

            <div className='wrapper'>
                {items && items.output.map(output => (

                    <div>
                        <div className='card_body' key={output.post_id} onClick={() => navigateToProduct(`${output.title}`, `${output.post_id}`)}>
                            <div className='image_container'>
                                <img src={output.thumbnail} className='thumbnail' />
                                <div className='hovercap'>Click for Details</div>
                            </div>

                            <div className='maintext'>
                                <h3 className='card__title'>{output.title}</h3>
                                <span className='date-filetype'>Date created: {output.created_timestamp}</span><br />
                                <span className='date-filetype'>File type: {output.post_type}</span>
                                <br /><br />
                                <h5 className='card__author'>{output.uploader_name}</h5>
                                <span className='description'><i>{output.description}</i></span>

                            </div>
                            <div className='purchaseInfo'>
                                <h1 className='card__price'>
                                    {output.price === 0 ? 'FREE' : `$${output.price}`}<br/>
                                    
                                </h1>
                                Status: {output.approved}
                                <button>DELETE</button>
                                
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
}

export default Dashboard;