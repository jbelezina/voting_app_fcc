import React from 'react';

class PollAnswer extends React.Component {
  
  handleClick(){
    this.props.voteForItem(this.props.indexOfPoll, this.props.indexOfAnswer, this.props.pollId);
    this.props.setHideAnswers();
    this.props.setShowResults();
    this.props.setVotedAlready();
  }
  
  render(){
    return (
      <tr key={this.props.answer["key"]}>
      <td>
        {this.props.answer.answer}
      </td>
      <td>
        <a className="btn" onClick={this.handleClick.bind(this)}>Vote</a>
      </td>
      </tr>
      )
  }
}

export default PollAnswer;
