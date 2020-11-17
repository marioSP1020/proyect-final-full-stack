import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home.js';
import Error from '../pages/Error.js';

import Register from '../pages/auth/register.js';
import Login from '../pages/auth/login.js';
import PhotoNew from '../pages/photo/new.js';
import ListPhotos from '../pages/photo/listPhotos.js';
import ListVideos from '../pages/video/listVideos.js';

// UI components
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import Navbar from './navbar.js';
import SecureRoute from './secure-route.js';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar/>
        
        <Switch>
          <SecureRoute path="/photo/new" component={PhotoNew} />
          <Route path="/photos" component={ListPhotos} />
          <Route path="/videos" component={ListVideos} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
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