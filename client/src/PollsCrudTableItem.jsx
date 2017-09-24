import React from 'react';


class PollsCrudTableItem extends React.Component {

  handleEdit(){
    this.props.activatePollEditing(this.props.poll._id);
  }

  handleDelete(){
    this.props.deletePoll(this.props.poll._id)
  }

  handleView(){

  }
  
  render() {
  
      let item = this.props.poll;
  
      return (
          <tr>
            <td className="center-align">{item.pollingQuestion}</td>
            <td className="center-align">{item.createdDate}</td>
            <td className="center-align"> 
              <a className="btn green">View</a> 
              <a className="btn blue" onClick={this.handleEdit.bind(this)}>Edit</a> 
              <a className="btn red" onClick={this.handleDelete.bind(this)}>Delete</a>
            </td>
          </tr>
          )
  }
}

export default PollsCrudTableItem;
