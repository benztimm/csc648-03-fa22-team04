import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/milestoneOne.css';
import ResultCard from './ResultCard';

function SearchResults(location) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
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