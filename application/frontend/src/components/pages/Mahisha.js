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
          <div className="aboutMe">
            My name is Mahisha Patel. I completed my Bachelors in Computer Engineering from Ahmedabad, India. 
            I've worked with various programming languages(Python, Core Java, C++, C), frontend (HTML, 
            CSS, Bootstrap, JS), backend (PHP, Django, Flask), and database (MySQL, MongoDB, SQLite, 
            Firebase ) as well. I've also made various projects leveraging Machine Learning and Deep 
            Learning. I love writing articles about emerging techniques and concepts of Machine 
            Learning. I'm a keen learner, passionate, enthusiastic, and focused on my work.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mahisha;
