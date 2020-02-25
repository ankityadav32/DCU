import React, { Component } from 'react';

class Tester extends Component {
    render() {
        return (
            <div className="outer_container">
                <div className="inner_container">
                    <nav className="primary_nav">
                        <ul>
                            <li><a href="#">CREDIT UNION</a></li>
                            <li><a href="#" onClick={this.myfunc}>INSURANCE</a></li>
                            <li><a href="#" onClick={this.myfunc}>REALTY</a></li>
                            <li><a href="#" onClick={this.myfunc}>INVESTMENT</a></li>
                        </ul>
                    </nav>
                    <nav className="secondary_nav" >
                        <ul>
                            <li><a onClick={this.setRenderer} href="#">Community</a></li>
                            <span>|</span>
                            <li><a href="#">Branches & ATMs</a></li>
                            <li><a href="#">Careers</a></li>

                        </ul>
                    </nav>
                    <nav className="tertiary_nav">
                        <ul>

                            <li ><a href="#">LOGIN</a></li>


                            <li><a href="#">SEARCH</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Tester;

{/* <span><i className="far fa-user"></i></span>
<span><i className="fas fa-search"></i></span>
<span>|</span> */}