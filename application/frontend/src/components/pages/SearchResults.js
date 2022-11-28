/* 
Filename: SearchResults.js

Date: 11/20/22
Authors: Sophia Chu
Description: Displays results from search bar located in Navbar

*/

import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import './styles/searchResults.css';


function SearchResults() {

  const navigate = useNavigate();

  const [apiPull, setApiPull] = useState(null);
  

  useEffect(() => {
    let newPull = window.localStorage.getItem('result');
    console.log(newPull);
    setApiPull(newPull); 
  })

  const media = JSON.parse(apiPull);
  
  const navigateToProduct = (title, post_id) => {
    console.log(title);
    console.log(post_id);
    window.sessionStorage.setItem('post_id', post_id);
    // navigate(`/productpage/${post_id}`, {state:{id:post_id, title:title}});
    var url = `http://localhost:3000/productpage/${post_id}`;
    window.open(url);

  }

  return (

    <div className='wrapper'>
    <br/>
    <div><b>Showing 1 - {media && Object.keys(media.output).length} out of {media && Object.keys(media.output).length} results</b></div>
    <br/>
    {media && media.output.map(output => (
      <div className='card_body' key={output.post_id} onClick={() => navigateToProduct(`${output.title}`, `${output.post_id}`)}>
        <div className='image_container'>
          <img src={output.thumbnail} className='thumbnail' />
        </div>

        <div className='maintext'>
          <h2 className='card__title'>{output.title}</h2>
          <span>Date created: {output.created_timestamp}</span><br />
          <span>File type: {output.post_type}</span>
          <br /><br />
          <h4 className='card__author'>{output.uploader_name}</h4>
          <span><i>{output.description}</i></span>

        </div>
        <div className='purchaseInfo'>
          <h1 className='card__price'>${output.price}</h1>
          <button className='card__bttn'>PURCHASE</button>
        </div>
      </div>
    ))}

</div>
  );
  }


export default SearchResults;


