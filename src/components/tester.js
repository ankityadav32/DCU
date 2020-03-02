import React, { Component } from 'react';

const imgUrls = [
    'pic2.jpg',
    'pic1.jpg',
    'pic3.jpg',
    'pic4.jpg', 'car-1.jpg'
];


class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    componentDidMount() {
        setInterval(() => {
            this.setState(prev => ({
                currentImageIndex: prev.currentImageIndex === imgUrls.length - 1 ? 0 :
                    prev.currentImageIndex + 1
            }))
        }, 5000)
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div className="carousel">

                <ImageSlide2 url={imgUrls[this.state.currentImageIndex]} />
                <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#10094;" />
                <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#10095;" />
            </div>
        );
    }
}


const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        {glyph}
    </div>
);
const ImageSlide2 = ({ url }) => {
    const styles = {
        width: '100%',
        height: 'auto',
        animationName: "fade",
        animationDuration: "3.5s"
    };
    console.log("called now")
    return (
        <img className="image-slide2 fade" src={url} style={styles} />
    );
}
const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div className="image-slide" style={styles}></div>
    );
}
export default Carousel;
// ReactDOM.render(
//   <Carousel />,
//   document.getElementById('container')
// );
