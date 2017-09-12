import React from 'react';

class CollapsibleItemContent extends React.Component {

  render(){
    
      return (
          
          <ul>
		        {this.props.item.answers.map(function(answer, index){
                return(
                  <li>{answer.answer} <a className="btn red" onClick={this.props.vote}>VOTE</a> </li>  
                )
            })}
          </ul>
          
        )
  }
}

export default CollapsibleItemContent;
