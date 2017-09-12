import React from 'react';
import PollAnswer from './PollAnswer';
import LargeBarChart from './LargeBarChart';


class Poll extends React.Component {

  constructor(){
    super();
    this.state={
      showAnswers: false,
      showResults: false,
      hasVotedAlready: false,
    }
    
    this.showAnswers = this.showAnswers.bind(this);
    this.toggleResults = this.toggleResults.bind(this);
    this.setVotedAlready = this.setVotedAlready.bind(this);
    this.setShowResults = this.setShowResults.bind(this);
    this.setHideAnswers = this.setHideAnswers.bind(this);
  }
  
  componentDidMount(){
  
  let alreadyVotedIn = this.props.alreadyVotedIn;

      if (alreadyVotedIn.indexOf(this.props.pollId) !== -1 ) {
      this.setState({hasVotedAlready : true});
    } else {
      this.setState({hasVotedAlready: false});
    }
  }
  
  setShowResults(){
    this.setState({showResults: true});
  }
  
  setVotedAlready(){
    this.setState({hasVotedAlready: true});
    this.forceUpdate();
  }  
  
  setHideAnswers(){
    this.setState({showAnswers: false});
  }
  
  
  toggleResults(){
    this.setState({showResults: !this.state.showResults});
    this.forceUpdate();
  }
  
  showAnswers(){
    this.setState({showAnswers: true});
  }

  render(){
  
  let answersMapped = this.props.answers.map((answer, indexOfAnswer, arrayOfAnswers)=>{
                
                if (this.state.showAnswers) {
                  return (
                    <PollAnswer key={answer.key} 
                                answer={answer} 
                                indexOfAnswer={indexOfAnswer} 
                                indexOfPoll={this.props.indexOfPoll} 
                                voteForItem={this.props.voteForItem}
                                setVotedAlready={this.setVotedAlready}
                                setShowResults={this.setShowResults}
                                setHideAnswers={this.setHideAnswers}
                                pollId={this.props.pollId}
                                />
                  )} else {
                    return null;
                  }
                
               
              });
  
  let voteNowButton = null;
  let hasVotedAlready = this.state.hasVotedAlready;
  let pollContent = null;
  let showAnswers = this.state.showAnswers;
  let showResults = this.state.showResults;
  
  if (!this.state.showAnswers && !hasVotedAlready) {
    voteNowButton = <a className="btn green" onClick={this.showAnswers}>vote now</a>
  } else if (!showAnswers && hasVotedAlready && !showResults) {
    voteNowButton = <span>Thanks for voting! <a className="btn-flat" onClick={this.toggleResults}>See results</a> 
    </span>
  } else if (!showAnswers && hasVotedAlready && showResults) {
    voteNowButton = <span>Thanks for voting! <a className="btn-flat" onClick={this.toggleResults}>Hide results</a>
    </span>
  }
  
  if (!hasVotedAlready) {
    pollContent = (
        <table className="striped centered">
                  <tbody>
                      {answersMapped}
                  </tbody>
        </table>
      )
  } else if (hasVotedAlready && showResults) {
    pollContent = (
        <LargeBarChart answers={this.props.answers}/>
      )
  } 
  
  return (
      <li key={this.props.answers[0]['key']} >
          <ul>
              <li className="col s12"><p><span>{this.props.question}{voteNowButton}</span></p></li>
              <li className="col s10 offset-s2">
                {pollContent}
              </li>
          </ul>
      </li>
    )
  }
  
  
}

export default Poll;
