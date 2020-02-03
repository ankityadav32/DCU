import React, { Component } from 'react';
import Slide from './slide';
import RightArrow from './Arrows';
import LeftArrow from './Arrowleft';

class DCUCarousel extends Component{
    constructor(props){
        super(props);
        this.state={
            images:[
                'hrgoiegi','fjiwejfiv','fweofoij','fijwjw'      
            ],
            currentIndex:0,
            translateValue:0
        };
    }
    gotoprevSlide = ()=>{

    }
    gotonextslide = ()=>{
        if(this.state.currentIndex===this.state.images.length-1){
            return this.setState({
                currentIndex:0,
                translateValue:0

            })
        }

        this.setState(prevState=>({
            currentIndex:prevState.currentIndex + 1,
            translateValue:prevState.translateValue - (this.slideWidth())
        }));
    }
    slideWidth = ()=>{
        return document.querySelector('.slide').clientWidth
    }
    render(){
        return (
            <div className="carousel">
                <div className="carousel-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
    
          </div>
            {
                this.state.images.map((image,i)=>(<Slide key={i} image={image}/>))
            }
            <LeftArrow gotoprevSlide={this.gotoprevSlide}/>
            <RightArrow gotonextslide={this.gotonextSlide}/>

            </div>
        );
    }
}
export default DCUCarousel;