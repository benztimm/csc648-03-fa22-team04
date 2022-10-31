import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Switch, Router } from 'react-router-dom';
import styles from './App.css';

import Home from './components/pages/Home';
import Ekarat from './components/pages/Ekarat';
import Jerry from './components/pages/Jerry';
import Mahisha from './components/pages/Mahisha';
import Sophia from './components/pages/Sophia';
import Sudhanshu from './components/pages/Sudhanshu';
import Ruben from './components/pages/Ruben';

import SearchResults from './components/pages/SearchResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ekarat" element={<Ekarat />} />
          <Route path="/sophia" element={<Sophia />} />
          <Route path="/jerry" element={<Jerry />} />
          <Route path="/mahisha" element={<Mahisha />} />
          <Route path="/sudhanshu" element={<Sudhanshu />} />
          <Route path="/ruben" element={<Ruben />} />

          <Route path="/searchresults" element={<SearchResults />} />
          
        </Routes>
      </div>
    );
  }
}

export default App;
