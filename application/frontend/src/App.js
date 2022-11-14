import React, { Component, useContext, useMemo, useState } from 'react';
import { Routes, Route, Switch, Router, createBrowserRouter, RouterProvider,
  Outlet, useRouteLoaderData, createRoutesFromElements, BrowserRouter  } from 'react-router-dom';
import axios from 'axios';
import styles from './App.css';

import Navbar from './components/Navbar/Navbar'

import Home from './components/pages/Home';
import Ekarat from './components/pages/Ekarat';
import Jerry from './components/pages/Jerry';
import Mahisha from './components/pages/Mahisha';
import Sophia from './components/pages/Sophia';
import Sudhanshu from './components/pages/Sudhanshu';
import Ruben from './components/pages/Ruben';
import About from './components/About';

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import SearchResults from './components/pages/SearchResults';
import { SearchContext } from './SearchContext.js';

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

