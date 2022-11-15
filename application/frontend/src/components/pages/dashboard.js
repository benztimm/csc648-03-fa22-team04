import React from "react";
import './styles/dashboard.css';

function Dashboard(){
        return (
            <div>
                <div class="dashboard">
                    <hr class="dashboard"></hr>
                    <button class="dashboard">POSTS</button>&nbsp;&nbsp;&nbsp;
                    <button class="dashboard">MESSAGES</button>
                </div>

                <div>
                    <text>Showing 1 - 2 out of 2 results</text>
                </div>
                <div className="card_body">
                    <div id="image_container">
                        <img src="" className='thumbnail' />
                    </div>
                    <div className='maintext'>
                        <h2 className='card__title'>Title</h2>
                        <h4 className='card__filetype'>File Type</h4>
                        <br />
                        <p className='card__description'>Description</p>
                    </div>
                    <div className='purchaseinfo'>
                        <h2 className='card__price'>Free</h2><br/>
                        <h4 className='card_status'>Status: IN-REVIEW</h4>
                        <button className='card__bttn'>DELETE</button>
                    </div>
                </div>

                <div className="card_body">
                    <div id="image_container">
                        <img src="" className='thumbnail' />
                    </div>
                    <div className='maintext'>
                        <h2 className='card__title'>Title 2</h2>
                        <h4 className='card__filetype'>File Type</h4>
                        <br />
                        <p className='card__description'>Description</p>
                    </div>
                    <div className='purchaseinfo'>
                        <h2 className='card__price'>$20</h2><br/>
                        <h4 className='card_status'>Status: APPROVED</h4>
                        <button className='card__bttn'>DELETE</button>
                    </div>
                </div>
            </div>
        );
}

export default Dashboard;