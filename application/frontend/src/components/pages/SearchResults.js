import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate, useHistory, generatePath } from 'react-router-dom';
import './styles/milestoneOne.css';
import ResultCard from './ResultCard';
import test from './test';

import { SearchContext } from '../../SearchContext.js';


function SearchResults(location) {

  const navigate = useNavigate();
  //global search variable
  const {value, setValue} = useContext(SearchContext);
  const [items, setItems] = useState([]);

  const APIpull = window.sessionStorage.getItem('result');
  
    return (
      
      <div className='wrapper'>
        <ResultCard/>
      </div>
    );
  }


export default SearchResults;


{/* <ul>
{items.map(item => (
  <li key={item.id}>
    {item.name} {item.price}
  </li>
))}
</ul> */}