import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home.js';
import Error from '../pages/Error.js';

// UI components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';


function App() {
  return (
    <div className="app">
       <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={Error} />
        </Switch>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
<Article/>
*/