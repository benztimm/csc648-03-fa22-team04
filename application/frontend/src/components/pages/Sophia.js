import React from 'react';

import './styles/milestoneOne.css';
import myImage from '../images/testimage.jpg';

const Sophia = () => {
  return (
    <div>
      <div className="container">
        <div className="aboutus-image">
          <img src={myImage}></img>
        </div>
        <div className="about">
          <h1 className='aboutHeader'>Sophia Chu</h1>
          <p className="aboutMe">
            Sophia Chu is currently a CS major at San Francisco State
            University. She has experience programming in Java, JavaScript, C,
            C++, and Python. Her hobbies include cooking, cycling, playing video
            games, and day trading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sophia;
