import React from 'react';

import './styles/milestoneOne.css';
import myImage from '../images/testimage.jpg';

const Sophia = () => {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img src={myImage}></img>
        </div>
        <div className="about">
          <h1>About Me</h1>
          <div className="aboutMe">
            Sophia Chu is currently a CS major at San Francisco State
            University. She has experience programming in Java, JavaScript, C,
            C++, and Python. Her hobbies include cooking, cycling, playing video
            games, and day trading.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sophia;
