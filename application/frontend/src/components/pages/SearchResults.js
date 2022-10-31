import React from 'react';
import { Link } from 'react-router-dom';
import './styles/milestoneOne.css';
import ResultCard from './ResultCard';

function SearchResults() {
  return (
    <div className='wrapper'>
      <ResultCard />
      <ResultCard />
      <ResultCard />

    </div>
  );
}



export default SearchResults;