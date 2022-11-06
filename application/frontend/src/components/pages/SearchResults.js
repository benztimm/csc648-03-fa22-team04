import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/milestoneOne.css';
import ResultCard from './ResultCard';

import { SearchContext } from '../../SearchContext.js';


function SearchResults(location) {
  //global search variable
  const {value, setValue} = useContext(SearchContext);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      },
    body: {value},
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", options)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
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