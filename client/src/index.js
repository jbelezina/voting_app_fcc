// imports: React and React Router stuff

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Redirect } from 'react-router'

// imports: Materialize stuff
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//imports: Components

import MenuBar from './MenuBar';
import Footer from './Footer';
import HomePage from './HomePage';
import MyPolls from './MyPolls';
import ViewPoll from './ViewPoll';

let loggedIn = null;

fetch('/api/current_user', { credentials : 'same-origin' })
.then(user=>user.json())
.then(user => {
    console.log(user + 'logged from index.js')
    loggedIn = user.loggedIn;
              });



ReactDOM.render(
  
   <Router>
    <div>
      <MenuBar/>
        <Route exact path="/MyPolls" render={() => (
          loggedIn ? (
          <MyPolls/>
            ) : (
          <Redirect to="/"/>
            )
      )}/>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/poll" component={ViewPoll}/>
      <Footer/>
    </div>
  </Router>
  
  ,
  document.getElementById('root')
);
