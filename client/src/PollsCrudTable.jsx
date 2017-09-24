import React from 'react';
import PollsCrudTableItem from './PollsCrudTableItem';


class PollsCrudTable extends React.Component {
  
  render() {
    
    let table = null;
    
    if (this.props.myPolls) {
       table = this.props.myPolls.map((poll) => {
        return (
            <PollsCrudTableItem poll={poll} 
                                key={poll._id} 
                                deletePoll={this.props.deletePoll}
                                activatePollEditing={this.props.activatePollEditing}
                                />
            )
        }); 
    } else {
      return <p></p>
    }
    
    
    return (
      <div>
        <table className="striped">
        <thead>
          <tr>
              <th className="center-align">Subject</th>
              <th className="center-align">Date Created</th>
              <th className="center-align">Action</th>
          </tr>
        </thead>

        <tbody>
          {table}
        </tbody>
      </table>
      </div>
    );
  }
}

export default PollsCrudTable;
