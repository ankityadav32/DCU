import React, { useState } from 'react';

function Slider() {
    let sliderArr = [<img src='pic2.jpg' />,
    <img src='pic1.jpg' />,
    <img src='pic3.jpg' />,
    <img src='pic4.jpg' />]



    const [x, setX] = useState(0);
    const goLeft = () => {
        setX(x + 100);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        setX(x - 100);
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>{item}</div>
                )
            })}
            <button id="goLeft" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
            <button id="goRight" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
    );
}
export default Slider;