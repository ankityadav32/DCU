import React, { Component } from 'react';

class Community extends Component {
    constructor(props){
        super(props);
    }
    close=()=>{
        this.props.close();
        document.body.style.overflow="";
    }
    componentDidUpdate(){
        document.body.style.overflow="hidden";
    }
    componentDidMount(){
        document.body.style.overflow="hidden";
    }
    
    
    render() {
        return (
            <div className="community" >
                <span onClick={this.close}>CLOSE  X</span>
                <div className="community-content">
                <ul className="community-content-ul">
                    COMMUNITY
                    <li id="border-one">Axuda</li>
                    <li>Community Report</li>
                    <li>DCU Cares</li>
                    <li>DCU for Kids</li>
                    <li>DCU Way</li>
                </ul>
                <ul>
                    COMMUNITY NEWS
                    <li id="border-one">Awards & Accolades</li>
                    <li>Boston 25 Zip Trips</li>
                    <li>Shredder Events</li>
                    <li>Supporting Local Businesses</li>
                </ul>
                <div className='community-content_img_container'>
                <img  src="community-pic.png"></img>
                </div>
                </div>
                <p>Striving to be Catalyst for Our Members' Success</p>
            </div>
        );
    }
}

export default Community;