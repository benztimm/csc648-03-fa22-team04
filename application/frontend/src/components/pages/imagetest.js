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



  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>

  );

}

