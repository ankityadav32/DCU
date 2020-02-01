import React, { Component } from 'react';
import Slide from './slide';
import RightArrow from './Arrows';
import LeftArrow from './Arrowleft';

class DCUCarousel extends Component{
    constructor(props){
        super(props);
        this.state={
            images:[
                "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg"       
            ],
            currentIndex:0
        };
    }
    gotoprevSlide = ()=>{

    }
    gotonextslide = ()=>{
        this.setState(prevState=>({
            currentIndex:prevState.currentIndex + 1
        }));
    }
    render(){
        return (
            <div className="carousel">
            <Slide/>
            <LeftArrow gotoprevSlide={this.gotoprevSlide}/>
            <RightArrow gotonextslide={this.gotonextSlide}/>

            </div>
        );
    }
}
export default DCUCarousel;