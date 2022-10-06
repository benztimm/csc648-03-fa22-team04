import React from 'react';
import { Link } from 'react-router-dom';

import './styles/milestoneOne.css';
import myImage from '../images/testimage.jpg';

const Jerry = () => {
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
          My name is Jerry and I am a Computer Science major undergraduate at San Francisco State University.
          I have experience working with Java and C++. I am still a beginner at using Python but I am willing to learn
          quickly to help contribute to this project. My hobbies include playing online games with friends and reading.
        </div>
      </div>
    </div>
  );
};

export default Jerry;
