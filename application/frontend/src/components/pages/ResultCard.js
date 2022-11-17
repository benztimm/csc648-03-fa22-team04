import React from 'react';
import { Link } from 'react-router-dom';
import './styles/searchResults.css';
import myImage from '../images/thumbnail.png';

function ResultCard(props) {
  return (
    <div className='resultCard'>
        <div className='card_body'>

            <div id='image_container'>
                <img src={myImage} className='thumbnail'/>
            </div>

            <div className='maintext'>
                <h2 className='card__title'>Title: HERE</h2>
                <h4 className='card__author'>Author: HERE</h4>
                <h4 className='card__filetype'>Filetype: HERE</h4>
                <br/>
                <p className='card__description'>Description here. Need to type more words for example. It's cold and I'm hungry.</p>
            </div>
            
            <div className='purchaseinfo'>
                <h1 className='card__price'>$20</h1>
                <button className='card__bttn'>PURCHASE</button>
            </div>
        </div>
      
    </div>
  );
}


export default ResultCard;


//after props
{/* <img src={props.myImage} />
<h2 className='card__title'>{props.title}</h2>
<h1 className='card__price'>{props.price}</h1>
<p className='card__description'>{props.description}</p>
<button className='card__bttn'>PURCHASE</button> */}