import React from 'react';
import { Link } from 'react-router-dom';

import './styles/milestoneOne.css';

//place your image in the images folder in the components folder and replace
// "testimage.jpg" with your image name in the path below this
//DELETE THESE COMMENTS when you are done for clean code tyyy
import myImage from '../images/testimage.jpg';

const Mahisha = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div className="container">
        <div className="image">
          <img src={myImage}></img>
        </div>
        <div className="about">
          <h1>About Me</h1>
          Insert your about here
        </div>
      </div>
    </div>
  );
};

export default Mahisha;
