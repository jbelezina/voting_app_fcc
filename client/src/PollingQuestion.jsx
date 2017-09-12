import React from 'react';


class PollingQuestion extends React.Component {
  

  render() {
    return (
      <input onChange={this.props.setPollingQuestion} placeholder="Enter your polling question" id="subject" type="text" />
    );
  }
}

export default PollingQuestion;
