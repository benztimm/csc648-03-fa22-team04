import React, { Component, useContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Switch, Router } from 'react-router-dom';
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

const queryClient = new QueryClient();

function App(){

  const [value, setValue] = useState('');
  const search = useMemo(
    () => ({ value, setValue }), 
    [value]
  );

  return (

      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <SearchContext.Provider value={search}>
          <div className="App">
            <React.Fragment>
              <Navbar/>
            </React.Fragment>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ekarat" element={<Ekarat />} />
              <Route path="/sophia" element={<Sophia />} />
              <Route path="/jerry" element={<Jerry />} />
              <Route path="/mahisha" element={<Mahisha />} />
              <Route path="/sudhanshu" element={<Sudhanshu />} />
              <Route path="/ruben" element={<Ruben />} />
              <Route path="/About" element={<About />} />


              <Route path="/searchresults" element={<SearchResults />} />
              
            </Routes>
          </div>
        </SearchContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>


    
  );

}

export default App;
