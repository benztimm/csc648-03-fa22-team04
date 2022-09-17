import React from 'react';
import { Link } from 'react-router-dom';

import './styles/milestoneOne.css';

//place your image in the images folder in the components folder and replace
// "testimage.jpg" with your image name in the path below this
//DELETE THESE COMMENTS when you are done for clean code tyyy
import myImage from '../images/testimage.jpg';

const Ruben = () => {
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
          My name is Ruben POnce and I am a Computer Science Major at San Francisco State
          University. I have experience working with Java, c++, and C. I also have begginer
          level of HTML/CSS but am willing to improve on this skill with this pproject.
          My hobbies include workingout, watching anime, reading manga, and watching sports.
        </div>
      </div>
    </div>
  );
};

export default Ruben;
