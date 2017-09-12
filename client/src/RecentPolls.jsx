import React from 'react';
import TinyBarChart from './TinyBarChart';
import LargeBarChart from './LargeBarChart'
import './css/RecentPolls.css';

class RecentPolls extends React.Component {

  render(){
      return (
          <div className="row">
            <div className="container">
                <h5>Recently added polls</h5><br/>
                <ul className="collapsible" data-collapsible="accordion">
                  <li>
                    <div className="collapsible-header">
                      <div className="col s10 left-align">
                        Who is your favourite musician?
                      </div>
                      <div className="col s2 center-align">
                        <TinyBarChart/>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <div className="row aligner">
                        <LargeBarChart/>
                      </div>
                      <div className="row aligner">
                        <a className="waves-effect waves-light btn aligned">Login to vote</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col s10 left-align">
                        Who is your favourite musician?
                      </div>
                      <div className="col s2 center-align">
                        <TinyBarChart/>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <div className="row aligner">
                        <LargeBarChart/>
                      </div>
                      <div className="row aligner">
                        <a className="waves-effect waves-light btn aligned">Login to vote</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col s10 left-align">
                        Who is your favourite musician?
                      </div>
                      <div className="col s2 center-align">
                        <TinyBarChart/>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <div className="row aligner">
                        <LargeBarChart/>
                      </div>
                      <div className="row aligner">
                        <a className="waves-effect waves-light btn aligned">Login to vote</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col s10 left-align">
                        Who is your favourite musician?
                      </div>
                      <div className="col s2 center-align">
                        <TinyBarChart/>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <div className="row aligner">
                        <LargeBarChart/>
                      </div>
                      <div className="row aligner">
                        <a className="waves-effect waves-light btn aligned">Login to vote</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col s10 left-align">
                        Who is your favourite musician?
                      </div>
                      <div className="col s2 center-align">
                        <TinyBarChart/>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <div className="row aligner">
                        <LargeBarChart/>
                      </div>
                      <div className="row aligner">
                        <a className="waves-effect waves-light btn aligned">Login to vote</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="col s10 left-align">
                        Who is your favourite musician?
                      </div>
                      <div className="col s2 center-align">
                        <TinyBarChart/>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <div className="row aligner">
                        <LargeBarChart/>
                      </div>
                      <div className="row aligner">
                        <a className="waves-effect waves-light btn aligned">Login to vote</a>
                      </div>
                    </div>
                  </li>
              </ul>
            </div>
            <br/>
          </div>
        )
  }
}

export default RecentPolls;
