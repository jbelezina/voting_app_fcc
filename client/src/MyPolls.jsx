import React from 'react';
import CreatePoll from './CreatePoll';
import PollsList from './PollsList';
import ManagePollsTab from './ManagePollsTab';
//import axios from 'axios';

import './css/MyPolls.css'

class MyPolls extends React.Component {
  
  constructor(){
    super();
    this.state = {
      user: {
        id: 112233,
        username: "Johny",
        alreadyVotedIn: [],
      },
      activeTab: 2,
      activeTabClass: 'col s4 btn-flat green lighten-4',
      inactiveTabClass: 'col s4 btn-flat gray lighten-4',
      tabOneClass: 'col s4 btn-flat grey lighten-4',
      tabTwoClass: 'col s4 btn-flat green lighten-4',
      tabThreeClass: 'col s4 btn-flat grey lighten-4',
      username: 'Jan',
      MyPolls: [],
      OtherPolls: [],
      pollEditingActive: false,
      editedPollId: null,
    }

    this.submitPoll = this.submitPoll.bind(this);
    this.firstTabActive = this.firstTabActive.bind(this);
    this.secondTabActive = this.secondTabActive.bind(this);
    this.thirdTabActive = this.thirdTabActive.bind(this);
    this.voteForItem = this.voteForItem.bind(this);
    this.logMyPollsState = this.logMyPollsState.bind(this);
    this.updateOtherPolls = this.updateOtherPolls.bind(this);
    this.activatePollEditing = this.activatePollEditing.bind(this);
  }
  
  activatePollEditing(pollId){
    this.setState({
      pollEditingActive: true,
      editedPollId: pollId,
    });
  }

  logMyPollsState(){
    console.log(this.state);
  }
  
  ComponentWillMount() {
    this.setState({activeTab:2});
  }

  componentDidMount() {
          fetch('/api/polls', { credentials : 'same-origin' })
            .then(res => res.json())
            .then(polls => {
            this.setState({OtherPolls: polls});
            console.log(this.state.OtherPolls); 
          });
  }

  updateOtherPolls() {
    fetch('/api/polls', { credentials : 'same-origin' })
    .then(res => res.json())
    .then(polls => {
    this.setState({OtherPolls: polls});
    console.log(this.state.OtherPolls); 
    });
  }
  
  voteForItem(indexOfPoll, indexOfAnswer, pollId){
    console.log("index of question: " + indexOfPoll + " index of answer: " + indexOfAnswer);
    let newOtherPolls = this.state.OtherPolls;
    
    newOtherPolls[indexOfPoll]["answers"][indexOfAnswer] = {
        "answer": newOtherPolls[indexOfPoll]["answers"][indexOfAnswer]["answer"],
        "key": newOtherPolls[indexOfPoll]["answers"][indexOfAnswer]["key"],
        "votes": newOtherPolls[indexOfPoll]["answers"][indexOfAnswer]["votes"] + 1
    }
    
    this.setState({OtherPolls: newOtherPolls});
    this.setState({user : {
                            ...this.state.user,
                            alreadyVotedIn: this.state.user.alreadyVotedIn.concat(pollId)
                          }
    })
  }
  
  submitPoll(polldata){
  console.log('Submit new poll');
  this.setState({MyPolls: polldata.concat(this.state.MyPolls)})
  console.log(this.state.polldata)
  }
  
  firstTabActive(){
    this.setState({
      activeTab : 1,
      tabOneClass: this.state.activeTabClass,
      tabTwoClass: this.state.inactiveTabClass,
      tabThreeClass: this.state.inactiveTabClass,
    });
  }
  
  secondTabActive(){
    this.setState({
      activeTab : 2,
      tabOneClass: this.state.inactiveTabClass,
      tabTwoClass: this.state.activeTabClass,
      tabThreeClass: this.state.inactiveTabClass,
    });
  }
  
  thirdTabActive(){
    this.setState({
      activeTab : 3,
      tabOneClass: this.state.inactiveTabClass,
      tabTwoClass: this.state.inactiveTabClass,
      tabThreeClass: this.state.activeTabClass,
    });
  }
  
  render() {
    
    const activeTab = parseInt(this.state.activeTab, 10);
    let tabOneClass = this.state.tabOneClass;
    let tabTwoClass = this.state.tabTwoClass;
    let tabThreeClass = this.state.tabThreeClass;
    
    let tabContents = null;
    
    if (activeTab === 1) {
        tabContents = <ManagePollsTab myPolls={this.state.OtherPolls} 
                                      updateOtherPolls={this.updateOtherPolls}
                                      pollEditingActive={this.state.pollEditingActive}
                                      activatePollEditing={this.activatePollEditing}
                                      />
    } else if (activeTab === 2) {
        tabContents = <CreatePoll firstTabActive={this.firstTabActive} 
                                  submitPoll={this.submitPoll} 
                                  hideForm={this.hidePollForm}
                                  updateOtherPolls={this.updateOtherPolls}
                                  />
    } else if (activeTab === 3) {
        tabContents = <PollsList polls={this.state.OtherPolls} 
                                 voteForItem={this.voteForItem} 
                                 logMyPollsState={this.logMyPollsState}
                                 alreadyVotedIn={this.state.user.alreadyVotedIn}
                                 />
    }

    
    
    return (
      <div className="container">
        <div className="row">  
          <div className="col s12 smallMenu">
            <ul className="center-align">
              <li className={tabOneClass} onClick={this.firstTabActive.bind(this)}>Manage your polls</li>
              <li className={tabTwoClass} onClick={this.secondTabActive.bind(this)}>Create new poll</li>
              <li className={tabThreeClass} onClick={this.thirdTabActive.bind(this)}>Vote in polls</li>
            </ul>
          </div>       
        </div>
        <div className="row">
        {tabContents}
        </div>
      </div>  
    );
  }
}

export default MyPolls;
