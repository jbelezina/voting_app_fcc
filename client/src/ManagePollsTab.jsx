import React from 'react';
import PollsCrudTable from './PollsCrudTable';
import CreatePollForm from './CreatePollForm';

class ManagePollsTab extends React.Component {
  
  constructor(){
    super();
    this.deletePoll = this.deletePoll.bind(this);
  }
  
  
  deletePoll(pollId){
   console.log(pollId); 
    
   fetch('/api/polls/' + pollId, { 
    credentials : 'same-origin',
     method: 'DELETE'
     })
     .then(this.props.updateOtherPolls);
  }


  activatePollEditingMode(){
    this.props.activatePollEditing();
  }
  
  
  render() {
  
  let tabContent = null;

  if (this.props.pollEditingActive === true) {
    tabContent = <CreatePollForm />    
  } else if (this.props.myPolls.length > 0) {
    tabContent = <PollsCrudTable myPolls={this.props.myPolls} 
                                 deletePoll={this.deletePoll}
                                 activatePollEditing={this.props.activatePollEditing}
                                 />
  } else if (this.props.myPolls.length === 0) {
    tabContent = <p>Nothing here yet! Go ahead and create a poll first.</p> 
  }
  
    return (
      <div>{tabContent}</div>
    );
  }
}

export default ManagePollsTab;
