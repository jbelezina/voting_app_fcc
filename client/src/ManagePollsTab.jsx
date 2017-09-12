import React from 'react';
import PollsCrudTable from './PollsCrudTable';
import CreatePollForm from './CreatePollForm';

class ManagePollsTab extends React.Component {
  
  constructor(){
    super();
    this.state = {
      pollEditingMode: false,
    }

  }
  
  activatePollEditingMode(){
    this.setState({pollEditingMode: true});
    this.forceUpdate();
  }
  
  
  render() {
  
  let tabContent = null;

  if (this.pollEditingMode === true) {
    tabContent = <CreatePollForm />    
  } else if (this.props.myPolls.length > 0) {
    tabContent = <PollsCrudTable myPolls={this.props.myPolls}/>
  } else if (this.props.myPolls.length === 0) {
    tabContent = <p>Nothing here yet! Go ahead and create a poll first.</p> 
  }
  
    return (
      <div>{tabContent}</div>
    );
  }
}

export default ManagePollsTab;
