import React from 'react';
import {Component} from 'react';

const RightArrow = (props) =>{
    return (
        <div className="nextArrow" onClick={props.gotonextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    );
}
export default RightArrow;