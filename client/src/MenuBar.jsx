import React from 'react';
import {
  Link
} from 'react-router-dom'
import './css/MenuBar.css';


class MenuBar extends React.Component {
    
    
    
    render(){
        return (
        <nav>
            <div className="nav-wrapper blue darken-3">
                <span id="appName">React Voting App</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><a href="http://localhost:3001/api/logout">Log out</a></li>
                    <li><Link to="/MyPolls">MyPolls</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default MenuBar;