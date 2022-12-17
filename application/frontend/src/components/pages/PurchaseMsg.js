/* 
Filename: PurchaseMsg.js

Date: 11/20/22
Authors: Ruben Ponce, Sophia Chu
Description: File for CONTACT SELLER modal in ProductPage.js

*/
import { useContext, useRef, useState, useHistory, useEffect } from 'react'; 
import './styles/modal.css'
import { RiCloseLine } from "react-icons/ri"

const purchaseMsg = ({setIsOpen, output}) =>{

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();


    const [message, setMessage] = useState('Hello, I would like to purchase your item.');


    const uploader_id = `${output.uploader_id}`;
    const post_id = `${output.post_id}`;


    const fetchData = async () => {


        if (sessionStorage.getItem('user') === null) {
            alert("Please login to contact seller.");
        } else {
            const user = JSON.parse(sessionStorage.getItem("user"));
            const user_id = user.user.user_id;
            const data = await fetch(`http://54.200.101.218:5000/send-message?buyer=${user_id}&seller=${uploader_id}&post_id=${post_id}&message=${message}`, {
                method: 'GET',
                headers: {
                    'user': `${user_id}`,
                    
                }
            });
            const json = await data.json();

            console.log(json);
            if(json.output === "Message sent !"){
                alert("Message sent!");
            }   else {
                alert("Error sending message.");
            }
        }



    }
    


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
                        <input id='messsage' className='modalContent-purchaseMsg-input' 
                        defaultValue='Hello, I would like to purchase your item.' onChange={(e) => setMessage(e.target.value)}/>
                    </div> 
                </div>
                <div className="modalAction">
                    <div className="actionContainer">
                        <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                            CANCEL
                        </button>
                        <button className="sendBtn" onClick={fetchData}>
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