import React from 'react';


class PollsCrudTableItem extends React.Component {

  handleEdit(){
    console.log('edit button pressed');
  }
  
  render() {
  
      let item = this.props.poll;
  
      return (
          <tr>
            <td className="center-align">{item.pollingQuestion}</td>
            <td className="center-align">{item.createdDate}</td>
            <td className="center-align"> <a className="btn green">View</a> <a className="btn blue" onClick={this.handleEdit.bind(this)}>Edit</a> <a className="btn red">Delete</a></td>
          </tr>
          )
  }
}

export default PollsCrudTableItem;
