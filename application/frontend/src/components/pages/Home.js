/* 
Filename: Home.js

Date: 11/20/22
Authors: Ruben Ponce, Sophia Chu
Description: File for Home page. 

*/

import React, {Component} from 'react';
import { useContext, useRef, useState, useHistory, useEffect,  } from 'react'; 
import { Link, renderMatches, useNavigate, useRouteLoaderData } from 'react-router-dom';
import './styles/home.css';


const Home = () =>{

  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://54.200.101.218:5000/home-page/`
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

  const navigateToProduct = (title, post_id) => {

    console.log(title);
    console.log(post_id);
    window.sessionStorage.setItem(post_id, title);
    navigate(`/productpage/${post_id}`, {state:{id:post_id, title:title}});

  }

    return (
      <div>
        <div>
          <h2 className='slogan'>
            "To connect our SFSU community through media share" - GatorExchange <br />
            Post, share, sell, and buy your content here.<br />

          </h2>
        </div>
        <br/>
    
      <div><b>Some Recent Uploads</b></div>
      <br/>
    
        <div className='card-container'>

          {data && data.output.map(output => (
            <div className='card' onClick={() => navigateToProduct(`${output.title}`, `${output.post_id}`)}>
              <div className='thumbnail-home'>
                <img src={output.thumbnail} className='thumbnail' />
              </div>
              <div className='title-home'>

                <h3>{output.title}</h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    );


};

export default Home;
