import React from "react";
import './styles/inbox.css';

function Inbox(){
    return (
        <div>
                <div class="dashboard">
                    <hr class="dashboard"></hr>
                    <button class="dashboard">POSTS</button>&nbsp;&nbsp;&nbsp;
                    <button class="dashboard">MESSAGES</button>
                </div>

                <div>
                    <text>Showing 1 - 2 out of 2 messages</text>
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
    );
}

export default Inbox;