/* 
Filename: PurchaseMsg.js

Date: 11/20/22
Authors: Ruben Ponce, Sophia Chu
Description: File for CONTACT SELLER modal in ProductPage.js

*/
import React from "react";
import './styles/modal.css'
import { RiCloseLine } from "react-icons/ri"

const purchaseMsg = ({setIsOpen}) =>{
    return (
        <>
        <div className="darkBG" onClick={() => setIsOpen(false)}/>
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
                        <span>Please enter message</span>
                        <input/>
                    </div> 
                </div>

                <div className="modalAction">
                    <div className="actionContainer">
                        <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                            CANCEL
                        </button>
                        <button className="sendBtn" onClick={() => setIsOpen(false)}>
                            SEND
                        </button>

                        
                    </div>
                </div>
            </div>
        </div> 
        </>

    );
}

export default purchaseMsg;