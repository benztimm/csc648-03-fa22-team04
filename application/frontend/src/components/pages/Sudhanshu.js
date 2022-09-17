import React from 'react';
import { Link } from 'react-router-dom';

import './styles/milestoneOne.css';

//place your image in the images folder in the components folder and replace
// "testimage.jpg" with your image name in the path below this
//DELETE THESE COMMENTS when you are done for clean code tyyy
import myImage from '../images/testimage.jpg';

const Sudhanshu = () => {
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
          Sudhanshu here, all the way from India for Master's in Computer Science here at SFSU. This is my first semester here.
          I have completed my bachelors in Computer Engineering from International Institute of Information Technology in Pune, India. Computers have always fascinated me because I believe technology can make world a better place, but we really need to understand what makes it a bad place to begin with.
          Before coming here at San Francisco, I have been working at a tech-based startup in India, as a full stack developer for couple of years. Every domain of technology is immensely interesting for me, and I love to explore and learn new things, which is my main motivation for joining this class.
          Besides classes, I love to travel and hike. I am a great fan of music mostly Indie and Rock genres, and love to watch movies as well. Absolutely love to play badminton and cricket, and also enjoy pc gaming.
        </div>
      </div>
    </div>
  );
};

export default Sudhanshu;
