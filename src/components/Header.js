import React, { Component } from 'react';
import Popup from './Popup';
import Community from './Community';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={renderer:false,
                    newrenderer:false}
    }
    myfunc=()=>{
        this.setState({renderer:true,newrenderer:false});
    }
    setRenderer=()=>{
        this.setState({newrenderer:true,renderer:false});
    }
    closeRender=()=>{
        this.setState({renderer:false});
    }
    closeNewRender=()=>{
        this.setState({newrenderer:false})
    }
  render() {
    return (
        <header>
            <nav>
                <div className="container">        
                    <div className="TopNavbar">
                        <div className="primary">
                        <ul>
                            <li><a id="Special" href="#">CREDIT UNION</a></li>
                            <li><a href="#" onClick={this.myfunc}>INSURANCE</a></li>
                            <li><a href="#" onClick={this.myfunc}>REALTY</a></li>
                            <li><a href="#" onClick={this.myfunc}>INVESTMENT</a></li>
                        </ul>
                        </div>
                        <div className="secondary">
                        <ul>
                            <li><a  id="Special" onClick={this.setRenderer} href="#">Community</a></li>
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
                            
                        </ul><br/><br/>
                    </div>
                </div>
            </nav>{this.state.renderer && <Popup close={this.closeRender}/>}
            {this.state.newrenderer && <Community close={this.closeNewRender}/>}
        </header>
    );
  }
}

export default Header;