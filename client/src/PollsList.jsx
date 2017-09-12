import React from 'react';
import Poll from './Poll'

class PollsList extends React.Component {
  
  render(){
  
  
  let polls = this.props.polls;
  let pollsList = polls.map((poll, indexOfPoll)=>{
    return (
          <Poll key={indexOfPoll} 
                question={poll.pollingQuestion} 
                answers={poll.answers} 
                indexOfPoll={indexOfPoll} 
                voteForItem={this.props.voteForItem}
                pollId={poll.pollId}
                alreadyVotedIn={this.props.alreadyVotedIn}
                />
        )      
      });
    
  return (
          <div className="container">
            <ul>
              {pollsList}
            </ul>
            <a className="btn red" onClick={this.props.logMyPollsState}>Log MyPolls state</a>
          </div>
        )
  }
}

export default PollsList;
