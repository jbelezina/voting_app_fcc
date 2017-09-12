import React from 'react';
import CreatePollForm from './CreatePollForm'

class CreatePoll extends React.Component {
  
  constructor(){
    super();
    this.state = {
      userName : 'Jan',
    }
  }
  
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <CreatePollForm firstTabActive={this.props.firstTabActive} submitPoll={this.props.submitPoll} hideForm={this.props.hideForm}/>
          </div>
        </div>  
      </div>
    );
  }
}

export default CreatePoll;
