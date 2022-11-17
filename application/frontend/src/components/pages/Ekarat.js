import React from 'react';


import './styles/milestoneOne.css';

//place your image in the images folder in the components folder and replace
// "testimage.jpg" with your image name in the path below
//DELETE THESE COMMENTS when you are done for clean code tyyy
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
