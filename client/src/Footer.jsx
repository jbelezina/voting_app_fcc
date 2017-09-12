import React from 'react';
import './css/Footer.css'

class Footer extends React.Component {
    render(){
        return (
        <footer className="page-footer blue darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Happy voting!</h5>
                <p className="white-text text-lighten-4">You do not have to be 18 years old to vote. You do have to log in first though.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright is not reserved. Do whatever you like with this app. Enjoy!
            </div>
          </div>
        </footer>
        )
    }
}

export default Footer;