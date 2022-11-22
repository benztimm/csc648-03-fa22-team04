/* 
Filename: Mahisha.js

Date: 11/20/22
Authors: Mahisha Patel, Sophia Chu
Description: File for Mahisha's About Us page.

*/
import React from 'react';
import './styles/milestoneOne.css';
import myImage from '../images/testimage.jpg';

const Mahisha = () => {
  return (
    <div>
      <div className="container">
      <div className="image">
          <img src={myImage} className="aboutus-image"></img>
        </div>
        <div className="about">
          <h1 className='aboutHeader'>Mahisha Patel</h1>
          <p className="aboutMe">
            My name is Mahisha Patel. I completed my Bachelors in Computer Engineering from Ahmedabad, India. 
            I've worked with various programming languages(Python, Core Java, C++, C), frontend (HTML, 
            CSS, Bootstrap, JS), backend (PHP, Django, Flask), and database (MySQL, MongoDB, SQLite, 
            Firebase ) as well. I've also made various projects leveraging Machine Learning and Deep 
            Learning. I love writing articles about emerging techniques and concepts of Machine 
            Learning. I'm a keen learner, passionate, enthusiastic, and focused on my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mahisha;
