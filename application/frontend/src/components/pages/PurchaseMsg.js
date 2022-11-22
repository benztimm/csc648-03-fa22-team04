/* 
Filename: PurchaseMsg.js

Date: 11/20/22
Authors: Ruben Ponce, Sophia Chu
Description: File for CONTACT SELLER modal in ProductPage.js

*/
import React from "react";
import './styles/modal.css'
import { RiCloseLine } from "react-icons/ri"

const purchaseMsg = ({setIsOpen, output}) =>{

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();

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
                        <span>Date: {month}/{date}/{year}</span><br/>
                        <span>This item: {output.title}</span><br/>
                        <span>Price: ${output.price}</span><br/><br/>
                        <span>Please enter message: </span><br/>
                        <input className='modalContent-purchaseMsg-input' defaultValue='Hello, I would like to purchase your item.'/>
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