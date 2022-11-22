/* 
Filename: Ekarat.js

Date: 11/20/22
Authors: Ekarat Buddharuksa, Sophia Chu
Description: File for Ekarat's About Us page.

*/
import React from 'react';
import './styles/milestoneOne.css';
import myImage from '../images/testimage.jpg';

const Ekarat = () => {
  return (
    <div>
      <div className="container">
        <div className="image">
          <img src={myImage} className="aboutus-image"></img>
        </div>
        <div className="about">
          <h1 className='aboutHeader'>Ekarat Buddharuksa</h1>
          <p className='aboutMe'>
            Ekarat Buddharuksa is MSCS student at San Francisco State University, 
            he has experience programming in various languages such as Java, 
            Javascript, Typescript, C, C++, MIPS Assembly, and so fourth.
            <br></br><br></br>
            He usually spend his free time cooking, playing video game, learning all stuff that interesting him.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ekarat;
