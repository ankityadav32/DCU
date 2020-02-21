import React, { Component } from 'react';

class Tester extends Component {
    render() {
        return (
            <div className="outer_container">
                <div className="inner_container">
                    <nav>
                        <ul id="primary-nav">
                            <li><a id="Special" href="#">CREDIT UNION</a></li>
                            <li><a href="#" >INSURANCE</a></li>
                            <li><a href="#" >REALTY</a></li>
                            <li><a href="#" >INVESTMENT</a></li>
                        </ul>
                    </nav>
                    <div className="navbar2">
                        <nav id="outer_middle-nav">
                            <ul id="middle-nav">
                                <li><a id="Special" href="#">Community</a></li>
                                <span>|</span>
                                <li><a href="#">Branches & ATMs</a></li>
                                <li><a href="#">Careers</a></li>

                            </ul>
                        </nav>
                        <nav className="bsdk">
                            <div id="triangle"></div>
                            <ul id="tertiary-nav">

                                <span><i className="far fa-user"></i></span>
                                <li ><a href="#">LOGIN</a></li>
                                <span>|</span>
                                <span><i className="fas fa-search"></i></span>
                                <li><a href="#">SEARCH</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tester;