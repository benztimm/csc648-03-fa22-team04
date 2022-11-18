import React, {Component} from 'react';
import { useContext, useRef, useState, useHistory, useEffect,  } from 'react'; 
import { Link, renderMatches, useRouteLoaderData } from 'react-router-dom';
import './styles/home.css';
import { SearchContext } from '../../SearchContext.js';



// `http://54.200.101.218:5000/search-posts/`

const Home = () =>{

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://54.200.101.218:5000/search-posts/`
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch(err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }  
    }
    getData()
  }, [])

    return (
      <div>
        <div>
          <h2 className='slogan'>
            "To connect our SFSU community through media share" - GatorExchange <br />
            Post, share, sell, and buy your content here.<br />

          </h2>
        </div>
        <div className='card-container'>

          {data && data.output.map(output => (
            <div className='card'>
              <div className='thumbnail-home'>
                <img src={output.file} className='thumbnail' />
              </div>
              <div className='title-home'>
                {output.title}

              </div>
            </div>
          ))}

        </div>

      </div>
    );


};

export default Home;
