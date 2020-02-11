import React, { Component } from 'react';

class Popup extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
         <div className="modal">
            <div className="modal-content">
                <div className="Modal-Header">
                <span>CLOSE X</span>
                </div>
                <div className="modal-body">
                <p id="heading">You are about to leave the DCU website</p>
                <p id="content">
                You are about to enter a website hosted by an organization separate from DCU.
                 Privacy and security policies of DCU will not apply once you leave our site.
                  We encourage you to read and evaluate the privacy policy
                   and level of security of any site
                   you visit when you enter the site. While we strive to
                    only link you to companies and organizations
                 that we feel offer useful information, DCU does not directly
                  support nor guarantee claims made by these sites.
                </p>
                </div>
            </div>
        </div>
        );
    }
}

export default Popup;