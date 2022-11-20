import React from "react";
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import './styles/dashboard.css';
import myImage from '../images/gatorExchange.png';

function Dashboard(){

    const navigate = useNavigate();

    const goToInbox = () => {
        navigate('/inbox');

    }
        return (
            <div className="dash-container">
                <div class="dashboard">
                    <button class="dashboard" >MY POSTS</button>&nbsp;&nbsp;&nbsp;
                    <button class="dashboard" onClick={goToInbox}>INBOX</button>
                </div>

                <div className='wrapper'>
                <div className='card_body' >
                        <div className='image_container'>
                            <img src={myImage} className='thumbnail' />
                        </div>

                        <div className='maintext'>
                            <h1 className='card__title'>My Gator</h1>
                            <span>Date created: </span><br />
                            <span>File type: </span>
                            <br /><br />
                            <h4 className='card__author'>Sophia Chu</h4>
                            <span><i>This is a stock photo of a cartoon alligator.</i></span>

                        </div>
                        <div className='purchaseInfo'>
                            <h1 className='card__price'>$20</h1>
                            <span>STATUS: APPROVED</span>
                            <button className='card__bttn'>DELETE</button>
                        </div>
                    </div>
                    <div className='card_body' >
                        <div className='image_container'>
                            <img src={myImage} className='thumbnail' />
                        </div>

                        <div className='maintext'>
                            <h1 className='card__title'>My Gator</h1>
                            <span>Date created: </span><br />
                            <span>File type: </span>
                            <br /><br />
                            <h4 className='card__author'>Sophia Chu</h4>
                            <span><i>This is a stock photo of a cartoon alligator.</i></span>

                        </div>
                        <div className='purchaseInfo'>
                            <h1 className='card__price'>$20</h1>
                            <span>STATUS: APPROVED</span>
                            <button className='card__bttn'>DELETE</button>
                        </div>
                    </div>
                    <div className='card_body' >
                        <div className='image_container'>
                            <img src={myImage} className='thumbnail' />
                        </div>

                        <div className='maintext'>
                            <h1 className='card__title'>My Gator</h1>
                            <span>Date created: </span><br />
                            <span>File type: </span>
                            <br /><br />
                            <h4 className='card__author'>Sophia Chu</h4>
                            <span><i>This is a stock photo of a cartoon alligator.</i></span>

                        </div>
                        <div className='purchaseInfo'>
                            <h1 className='card__price'>$20</h1>
                            <span>STATUS: In-review</span>
                            <button className='card__bttn'>DELETE</button>
                        </div>
                    </div>
                </div>

            </div>
        );
}

export default Dashboard;