import React from "react";
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import './styles/inbox.css';



function Inbox(){
    const navigate = useNavigate();

    const goToPosts = () => {
        navigate('/dashboard');

    }


    return (

        <div>
                <div class="dashboard">
                    <hr class="dashboard"></hr>
                    <button class="dashboard" onClick={goToPosts}>POSTS</button>&nbsp;&nbsp;&nbsp;
                    <button class="dashboard">MESSAGES</button>
                </div>

            <div className="inbox-container">
                <hr></hr>
                <div class="inbox">
                    <div class="innerinbox">
                        <pre>I am interested in buying is product. <br/>
                            Date: October 20, 2022 <br/>
                            Title: Music Album <br/>
                            <br/>
                            Please contact on: <br/>
                            +1 650 839 0339 <br/>
                            adria@sfsu.edu
                        </pre>
                    </div>
                    <div class="innerinbox">
                        <button>DELETE</button>
                    </div>
                </div>

                <hr></hr>
                <div class="inbox">
                    <div class="innerinbox">
                        <pre>I am interested in buying is product. <br/>
                            Date: October 20, 2022 <br/>
                            Title: Music Album <br/>
                            <br/>
                            Please contact on: <br/>
                            +1 650 839 0339 <br/>
                            adria@sfsu.edu
                        </pre>
                    </div>
                    <div class="innerinbox">
                        <button>DELETE</button>
                    </div>
                </div>

                </div>

            </div>
    );
}

export default Inbox;