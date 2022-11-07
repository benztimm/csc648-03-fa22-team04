import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useHistory } from 'react-router-dom';
import './styles/milestoneOne.css';
import ResultCard from './ResultCard';
import test from './test';

import { SearchContext } from '../../SearchContext.js';


function SearchResults(location) {

  const navigate = useNavigate();
  //global search variable
  const {value, setValue} = useContext(SearchContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Access-Control-Allow-Origin':'*',
  //     'Content-Type': 'text/html; charset=utf-8',
  //     'Access-Control-Request-Method': 'POST',
  //     },
  //   body: {value},
  // };


  useEffect(() => {
    fetch(`http://54.200.101.218:5000/data-parameters/${value}`)
      .then(res => res.json())
      .then(
        
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          //navigate(0);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(items);

    return (
      
      <div className='wrapper'>
        <ResultCard/>
      </div>
    );
  }
}








export default SearchResults;

{/* <ul>
{items.map(item => (
  <li key={item.id}>
    {item.name} {item.price}
  </li>
))}
</ul> */}