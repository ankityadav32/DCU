import React, { Component } from 'react';

class Community extends Component {
    close=()=>{
        
    }
    render() {
        return (
            <div className="community">
                <span onClick={this.close}>CLOSE  X</span>
                <div className="community-content">
                <ul>
                    COMMUNITY
                    <li>Axuda</li>
                    <li>Community Report</li>
                    <li>DCU Cares</li>
                    <li>DCU for Kids</li>
                    <li>DCU Way</li>
                </ul>
                <ul>
                    COMMUNITY NEWS
                    <li>Awards & Accolades</li>
                    <li>Boston 25 Zip Trips</li>
                    <li>Shredder Events</li>
                    <li>Supporting Local Businesses</li>
                </ul>
                <img src="community-pic.png"></img>
                </div>
            </div>
        );
    }
}

export default Community;