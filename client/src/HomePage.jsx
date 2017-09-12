import React, { Component } from 'react';
import RecentPolls from './RecentPolls';
import './css/App.css';

class HomePage extends Component {
  
  constructor(){
    super();

    this.state = {
      loggedIn: 'not set',
    }
  }

  componentDidMount(){
    fetch('/api/current_user', { credentials : 'same-origin' })
            .then(user=>user.json())
            .then(user => {
                console.log(user)
                this.setState({loggedIn:user.loggedIn});
                          });
  }

  logUser(){
    console.log(this.state.loggedIn);

  }

  render() {
    
    return (
      <div>
        <div className="row">
          <div className="topsectionContent text-white center-align">
            <div className="container ">
                <h1 className="main-text">Vote like it's 2017! <a className="btn" onClick={this.logUser.bind(this)}>log user</a> </h1>
                <a href="http://localhost:3001/auth/google" className="btn red">Sign in with Google</a>
            </div>
          </div>
        </div>
        <div className="row features">
          <div className="col s4 center-align blue darken-4 featureOne">
            <span><i className="fa fa-plus-circle fa-3x icon" aria-hidden="true"></i></span>
            <h5 className="featuretext">CREATE POLLS IN SECONDS</h5>
          </div>
          <div className="col s4 center-align blue blue darken-3 featureTwo">
            <span><i className="fa fa-bullhorn fa-3x icon" aria-hidden="true"></i></span>
            <h5 className="featuretext">SHARE YOUR POLLS WITH FRIENDS</h5>
          </div>
          <div className="col s4 center-align blue darken-4 featureThree">
            <span><i className="fa fa-check-square fa-3x icon" aria-hidden="true"></i></span>
            <h5 className="featuretext">VOTE IN INTERESING POLLS</h5>
          </div>
        </div>
        <RecentPolls/>
      </div>
    );
  }
}

export default HomePage;
