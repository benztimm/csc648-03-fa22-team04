import React from 'react';
import { Link } from 'react-router-dom';
import './styles/milestoneOne.css';

function Home() {
  return (
    <div>
      <div>
        <h2>Software Engineering class SFSU</h2>
        <h3>Fall, 2022</h3>
        <h3>Section 03</h3>
        <h3>Team 4</h3>
      </div>

      <div className="team">
        <Link to="/ekarat">
          <button>Ekarat Buddharuksa</button>
        </Link>
        <br />
        <Link to="/sophia">
          <button>Sophia Chu</button>
        </Link>
        <br />
        <Link to="/jerry">
          <button>Jerry Liu</button>
        </Link>
        <br />
        <Link to="/sudhanshu">
          <button>Sudhanshu Kulkarni</button>{' '}
        </Link>
        <br />
        <Link to="/mahisha">
          <button>Mahisha Patel</button>
        </Link>
        <br />
        <Link to="/ruben">
          <button>Ruben Ponce</button>
        </Link>
      </div>


    </div>
  );
}

export default Home;
