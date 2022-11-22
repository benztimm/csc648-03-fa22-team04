import React, { useEffect, useState } from "react";
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Modal from './modal.js';




//IMAGE TEST FOR base64 IMAGE FROM JSON DATA
export default function ImageTest() {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toMyUploads = () => {
    //settingExtension();
    navigate('/dashboard');
}

    //LOGIN
    const [isLoginOpen, setLoginOpen] = useState(false);
    

    //REGISTER
    const [isRegisterOpen, setRegisterOpen] = useState(false);


    const handleClick = value => () => console.log(value);


  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}


    //COPY ALL OF THIS

    <button onClick={() => setLoginOpen(true)}>
        Open Modal
      </button>
      {isLoginOpen && <Modal setIsOpen={setLoginOpen} />}


      <button onClick={() => setRegisterOpen(true)}>
        Open Modal
      </button>
      {isRegisterOpen && <Modal setIsOpen={setRegisterOpen} />}



    <button onClick={handleClick('Bar')}>Speak</button>

      

    </div>

    

  );

}

