import React from 'react';
import NewAnswer from './NewAnswer';
import PollingQuestion from './PollingQuestion';

class CreatePollForm extends React.Component {
  
  constructor(){
    super();
    this.state = {
      pollingQuestion: '',
      answers: [
        {answer: '', key: Math.random().toString()},
              ],
      }
      
      this.setPollingQuestion = this.setPollingQuestion.bind(this);
      this.addAnswer = this.addAnswer.bind(this);
      this.handleAnswerChange = this.handleAnswerChange.bind(this);
      this.removeAnswer = this.removeAnswer.bind(this);
      this.submitThisPoll = this.submitThisPoll.bind(this);
      this.clearForm = this.clearForm.bind(this);
      this.logState = this.logState.bind(this);
  }
  
  setPollingQuestion(event){
    this.setState({pollingQuestion: event.target.value});
    console.log('polling question:' + this.state.pollingQuestion);
  }
  
  addAnswer(){
    
    let newKey = Math.random().toString();
    this.setState({ answers: this.state.answers.concat([{answer: '', key: newKey}]) })
    console.log('this.state.answers: ' +  this.state.answers);
    
  }
  
  removeAnswer(id){
    let answersArray = this.state.answers;
    let answersLength = answersArray.length;
    console.log(answersLength);
        
    let value = id;
          
    function removeNth(item, index, array, answersLength){  
          if (index === value) {
      	    return false
          } else {
      	    return true
          }  
    }  
      
      
      console.log('id for removing answer is ' + value)
    
    if (answersLength > 1) {
      this.setState({
        answers: this.state.answers.filter(removeNth),  
      })
    }
  }
  
  handleAnswerChange(newAnswer, id){
    console.log('New answer from within CreatePollForm is ' + newAnswer)
    console.log('id passed to CreatePollForm from NewAnswer is ' + id)
    
    this.setState({
    answers: this.state.answers.map((item, _id) => {
      if (_id !== id) return item;
      return { answer: newAnswer, key: item.key };
    }),
  });
  }
  
  submitThisPoll(){
    
    let pollingQuestion = this.state.pollingQuestion;
    let answers = this.state.answers;
    
    let polldata = [
        {
          pollId: Math.random(),
          userId: 123,
          createdDate: new Date().toISOString().slice(0, 10),
          pollingQuestion: pollingQuestion,
          answers: answers
        }
        ];
        
    this.props.submitPoll(polldata);
    this.props.firstTabActive();
    
    }
    
  clearForm(){
    
    this.setState({answers: [{pollingQuestion: ' ', answer: '', key: Math.random().toString()}] });
    console.log(this.state)
  }
  
  logState(){
    console.log(this.state);
  }
  
  render() {
    
    let answersRender = [];
    let answersArray = this.state.answers;
    
    for (var i = 0; i < this.state.answers.length; i++) {
      answersRender.push(<NewAnswer 
      key={answersArray[i]['key']}
      id={i} 
      answersLength={answersArray.length}
      handleAnswerChange={this.handleAnswerChange}
      removeAnswer={this.removeAnswer} />);
    }
    
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <div className="input-field">
              <PollingQuestion setPollingQuestion={this.setPollingQuestion}/>
            </div>
          </div>
        </div>
        {answersRender}
        <div className="row">
            <div className="col s2">
              <a onClick={this.submitThisPoll} className="btn green">Submit</a>
            </div>
            <div className="col s2">
              <a className="btn red" onClick={this.clearForm}>Clear</a>
            </div>
            <div className="col s2">
              <a className="btn red" onClick={this.logState}>Log State</a>
            </div>
            <div className="col s6 right-align">
              <a className="btn-flat" onClick={this.addAnswer}>Add answer</a> 
            </div>
        </div>
      </div>
    );
  }
}

export default CreatePollForm;
