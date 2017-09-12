import React from 'react';

class NewAnswer extends React.Component {
  
  setAnswer(e){
    let newAnswer = e.target.value;
    this.props.handleAnswerChange(newAnswer, this.props.id)
  }
  
  removeAnswer(){
    this.props.removeAnswer(this.props.id)
  }
  
  render(){
    
    
    let removeButton = null;
    if (this.props.answersLength > 1) {
      removeButton = <a className="btn red" onClick={this.removeAnswer.bind(this)}>X</a>;
    } else {
      removeButton = <a className="btn grey lighten-1" onClick={this.removeAnswer.bind(this)}>X</a>
    }
    
    return (
      
      <div>
        <div className="row">
          <div className="col s11">
            <div className="input-field">
              <input onChange={this.setAnswer.bind(this)} placeholder="Enter answer" id="subject" type="text" className="validate"/>
            </div>
          </div>
          <div className="col s1">
            {removeButton}
          </div>
        </div>
      </div>
      
      )
  }
}

export default NewAnswer;