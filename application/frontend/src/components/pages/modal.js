import React from "react";
import './styles/modal.css';
import { RiCloseLine } from "react-icons/ri";
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';

const Modal = ({setIsOpen}) => {

  const navigate = useNavigate();
  const toMyUploads = () => {
    //settingExtension();
    navigate('/dashboard');


}
    return (
      
        <>
          <div className='darkBG' onClick={() => setIsOpen(false)} />
          <div className='centered'>
            <div className='modal'>
              <div className='modalHeader'>
                <h5 className='heading'>SUCCESS</h5>
              </div>
              <button className='closeBtn' onClick={() => setIsOpen(false)}>
                <RiCloseLine style={{ marginBottom: "-3px" }} />
              </button>
              <div className='modalContent'>
                Your content will now be reviewed for approval. Once it is approved, it will be public on the website. Please check back shortly. Thank you for your patience.
              </div>
              <div className='modalActions'>
                <div className='actionsContainer'>
                  <button className='deleteBtn' onClick={toMyUploads}>
                    VIEW MY UPLOADS
                  </button>
                  <button
                    className='cancelBtn'
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
};

export default Modal;