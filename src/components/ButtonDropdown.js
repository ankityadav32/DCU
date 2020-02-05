import React, { Component } from 'react';

class ButtonDropdown extends Component {
    constructor(props){
        super(props);
        this.state={classname:"dropdown-content"}
    }
    myfunc = ()=>{
        this.setState({classname:"show"})
    }
   
    render() {
        return (
            <div className="dropdown-span">I am looking for
                <div className="dropdown">
                    <span  className="dropspan">
                    <select className="dropdown-list">
                        <option value="a student loan">a student loan</option>
                        <option value="a certificate account">a certificate account</option>
                        <option value="a checking account">a checking account</option>
                        <option value="a mortgage">a mortgage</option>
                        <option value="an equity line or loan">an equity line or loan</option>
                        <option value="a savings account">a savings account</option>
                        <option value="a credit card">a credit card</option>
                        <option value="a vehicle loan">a vehicle loan</option>
                    </select>
                    
                    </span>
                    
                
                </div>
            </div>
        );
    }
}

export default ButtonDropdown;