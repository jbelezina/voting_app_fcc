import React from 'react';

class ViewPoll extends React.Component {
  
  componentDidMount(){
    fetch('/api/polls/' + this.props.pollId)
  }

  render() {
    return (
      <div className="container">
        <h1>HELLO FROM VIEW POLL</h1>
      </div>
    );
  }
}

export default ViewPoll;
