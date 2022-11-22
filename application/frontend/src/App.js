/* 
Filename: App.js

Date: 11/20/22
Authors: Sophia Chu, Ruben Ponce
Description: Contains router for all components of app.

*/
import React, { Component, useContext, useMemo, useState } from 'react';
import { Routes, Route, Switch, Router, createBrowserRouter, RouterProvider,
  Outlet, useRouteLoaderData, createRoutesFromElements, BrowserRouter  } from 'react-router-dom';
import styles from './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/pages/Home';
import About from './components/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UploadPost from './components/pages/UploadPost';
import Dashboard from './components/pages/Dashboard';
import Inbox from './components/pages/UserInbox';
import ProductPage from './components/pages/ProductPage';
import SearchResults from './components/pages/SearchResults';
import { QueryClient, QueryClientProvider } from 'react-query';


//TEST
import TESTIMAGE from './components/pages/imagetest.js';

const queryClient = new QueryClient();


const App= () =>{


  return (


    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <React.Fragment>
            <Navbar />
          </React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/upload" element={<UploadPost />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/productpage/:post_id" element={<ProductPage />}/>


            <Route path="/searchresults" element={<SearchResults />}>
              <Route index element={<SearchResults />} />
              <Route path=":sr" element={<SearchResults />} />
            </Route>

        //test
            <Route path="/imagetest" element={<TESTIMAGE />} />


          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>

  );

};

export default App;

