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
    setApiPull(newPull); 
  })

  const media = JSON.parse(apiPull);
  
  const navigateToProduct = (title, post_id) => {
    console.log(title);
    console.log(post_id);
    window.sessionStorage.setItem('post_id', post_id);
    // navigate(`/productpage/${post_id}`, {state:{id:post_id, title:title}});

    //USE THIS url WHEN TESTING ON LOCALHOST
    var url = `http://localhost:3000/productpage/${post_id}`;

    //var url = `http://54.200.101.218/productpage/${post_id}`;
    window.open(url);

  }

  function handleDownload(event) {

  }
  
  

  return (
    
    <div className='wrapper'>
    <br/>
    <div><b>Showing {media && Object.keys(media.output).length} results</b></div>
    <br/>
    {media && media.output.map(output => (

      <div>
      <div className='card_body' key={output.post_id} onClick={() => navigateToProduct(`${output.title}`, `${output.post_id}`)}>
        <div className='image_container'>
          <img src={output.thumbnail} className='thumbnail' />
          <div className='hovercap'>Click for Details</div>
        </div>

        <div className='maintext'>
          <h3 className='card__title'>{output.title}</h3>
          <span className='date-filetype'>Date created: {output.created_timestamp}</span><br />
          <span className='date-filetype'>File type: {output.post_type}</span>
          <br /><br />
          <h5 className='card__author'>{output.uploader_name}</h5>
          <span className='description'><i>{output.description}</i></span>

        </div>
        <div className='purchaseInfo'>
          <h1 className='card__price'>
            {output.price === 0 ? 'FREE' : `$${output.price}`}
          </h1>
          <button
            className={output.price === 0 ? 'card__bttn-free' : 'card__bttn'}
            onClick={() => {
              if (output.price === 0) window.open(`${output.file}`);
            }}
          >
            {output.price === 0 ? 'DOWNLOAD' : 'PURCHASE'}
          </button>
        </div>
      </div>
      
      </div>
    ))}

  </div>
  );
  
}


export default SearchResults;


