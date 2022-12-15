import React, { useContext, useRef, useState, useHistory, useEffect } from 'react';
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate, generatePath, Navigate} from 'react-router-dom';
import './styles/loginRegister.css';

const Modal = ({children, setRedirectOpen}) =>{


    const navigate = useNavigate();


    const handleSubmit  = (event) => {

        
    }


    return (
        <>
        <div className='darkBG' onClick={() => setRedirectOpen(false)} />
        <div className='form-container-lr'>
          <div className="modal">
            <div className="modal-content">
              {children}
            </div>
          </div>
          <button className='cancel-button-lr' onClick={() => setRedirectOpen(false)}>CANCEL</button>
        </div>


    </>
    );
}

export default Modal;

