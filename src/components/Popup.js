import React, { Component } from 'react';

class Popup extends Component {
    render() {
        return (
        <div className="modal">
            <div className="modal-content">
                <div className="Modal-Header">
                <span>CLOSE</span>
                </div>
                <div className="modal-body">
                You are about to leave the DCU website
                </div>
            </div>
        </div>
        );
    }
}

export default Popup;