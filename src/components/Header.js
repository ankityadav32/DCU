import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header>
            <nav>
                <div className="container">        
                    <div className="TopNavbar">
                        <div className="primary">
                        <ul>
                            <li><a href="#">CREDIT UNION</a></li>
                            <li><a href="#">INSURANCE</a></li>
                            <li><a href="#">REALTY</a></li>
                            <li><a href="#">INVESTMENT</a></li>
                        </ul>
                        </div>
                        <div className="secondary">
                        <ul>
                            <li><a href="#">Community</a></li>
                            <span>|</span>
                            <li><a href="#">Branches & ATMs</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                        </div>
                        <div className="tertiary">
                        <ul>
                            <li ><a href="#">LOGIN</a></li>
                            <span>|</span>
                            <li><a href="#">SEARCH</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
  }
}

export default Header;