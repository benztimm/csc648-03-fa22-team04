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
import ReactGA from 'react-ga';


const Home = () =>{

  useEffect(() => {
    console.log(window.location.pathname + window.location.search);
    try{
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
    catch(e){
      console.error(e);
    }
    
  }, []);

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
    window.sessionStorage.setItem('post_id', post_id);
    //navigate(`/productpage/${post_id}`, {state:{id:post_id, title:title}});

    //USE THIS url WHEN TESTING ON LOCALHOST
    //var url = `http://localhost:3000/productpage/${post_id}`;

    var url = `http://54.200.101.218/productpage/${post_id}`;
    window.open(url);
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
    
      <div><b className='home-recent'>Recent Uploads</b></div>
      <hr width='40%' ></hr>
      <br/>
    
        <div className='card-container'>

          {data && data.output.map(output => (
            <div className='card' onClick={() => navigateToProduct(`${output.title}`, `${output.post_id}`)}>
              <div className='thumbnail-home'>
                <img src={output.thumbnail} className='thumbnail' />
                <div className='hovercap'>Click for Details</div>
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
