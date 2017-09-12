// imports: React and React Router stuff

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// imports: Materialize stuff
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//imports: Components

import MenuBar from './MenuBar';
import Footer from './Footer';
import HomePage from './HomePage';
import MyPolls from './MyPolls';



ReactDOM.render(
  
   <Router>
    <div>
      <MenuBar/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/MyPolls" component={MyPolls}/>
      <Footer/>
    </div>
  </Router>
  
  ,
  document.getElementById('root')
);
