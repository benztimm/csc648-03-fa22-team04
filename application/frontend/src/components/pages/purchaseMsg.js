import React from "react";
import './styles/modal.css'
import { RiCloseLine } from "react-icons/ri"

const purchaseMsg = ({setIsOpen}) =>{
    return (
        <div className="darkBG" onClick={() => setIsOpen(false)}>
        <div className="centered">
            <div className="modal-purchaseMsg">
                <div className="modalHeader">
                    <h5 className="heading">MESSAGE</h5>
                </div>
                <button className="closeBtn" onClick = {() => setIsOpen(false)}>
                    <RiCloseLine style={{ marginBottom: "-3px"}} />
                </button>
                <div className="msgContainer">
                    <div className="modalContent-purchaseMsg">
                        Hi Test Username,<br/><br/>
                        I am intersted in buying this digital media. <br/>
                        <br/>
                        Date: 11/16/2022<br/>
                        Title: Test Title<br/>
                        <br/>
                        Please contact me on:<br/>
                        Contact Number: +1(012) 345-6789 <br/>
                        Email: tusername@sfsu.edu<br/>
                    </div> 
                </div>

                <div className="modalAction">
                    <div className="actionContainer">
                        <button className="sendBtn" onClick={() => setIsOpen(false)}>
                            SEND
                        </button>

                        <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        </div>
    );
}

export default purchaseMsg;