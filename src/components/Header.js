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
                            <li><a id="Special" href="#">CREDIT UNION</a></li>
                            <li><a href="#">INSURANCE</a></li>
                            <li><a href="#">REALTY</a></li>
                            <li><a href="#">INVESTMENT</a></li>
                        </ul>
                        </div>
                        <div className="secondary">
                        <ul>
                            <li><a  id="Special" href="#">Community</a></li>
                            <span>|</span>
                            <li><a href="#">Branches & ATMs</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                        </div>
                        <div className="tertiary">
                        <ul >
                            <span><i  className="far fa-user"></i></span>
                            <li ><a href="#">LOGIN</a></li>
                            <span>|</span>
                            <span><i className="fas fa-search"></i></span>
                            <li><a href="#">SEARCH</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="BottomNavbar">
                        <span><i id="menubars" className="fas fa-bars"></i></span>
                        <img src="DCUGreen.svg" alt="DCU logo"/>
                        <span><i id="logo" className="fas fa-search"></i></span>
                        <span><i id="logo" className="far fa-user"></i></span>
                        <ul>
                            <li><a href="#">Bank</a></li>
                            <li><a href="#">Borrow</a></li>
                            <li><a href="#">Plan</a></li>
                            <li><a href="#">Learn</a></li>
                            <li><a href="#">Access</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Join</a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
  }
}

export default Header;