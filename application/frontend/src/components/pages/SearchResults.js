import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useHistory, generatePath, useLocation } from 'react-router-dom';
import './styles/searchResults.css';


function SearchResults() {

  const navigate = useNavigate();
  //global search variable
  const location = useLocation();

  const [apiPull, setApiPull] = useState(null);

  useEffect(() => {
    let newPull = window.localStorage.getItem('result');
    console.log(newPull);
    setApiPull(newPull); 

  })

  var media = JSON.parse(apiPull);


  return (

    <div className='wrapper'>

      
    <br/>
    {media && media.output.map(output => (
      <div className='card_body' key={output.post_id}>

        <div id='image_container'>
          <img src={output.file} className='thumbnail' />
        </div>

        <div className='maintext'>
          <h2 className='card__title'>{output.title}</h2>
          <h4 className='card__author'>{output.uploader_name}</h4>
          <h4 className='card__filetype'>{output.post_type}</h4>
          <br />
          <p className='card__description'>{output.description}</p>
        </div>

        <div className='purchaseinfo'>
          <h1 className='card__price'>${output.price}</h1>
          <button className='card__bttn'>PURCHASE</button>
        </div>
      </div>
    ))}

</div>
  );
  }


export default SearchResults;


