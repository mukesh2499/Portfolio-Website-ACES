import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/2.jpg'
import slider2 from '../assets/3.jpg'

function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider1} alt="First slide"style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}} />
                    <Carousel.Caption>
                    <h3>ACES - Association of Computer Engineering Students</h3>
                    <p> From Ideas to Innovation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider2}alt="Second slide"/>

                    <Carousel.Caption>
                    <h3>ACES - Association of Computer Engineering Students</h3>
                    <p> From Ideas to Innovation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider1} alt="Third slide" />
                    <Carousel.Caption>
                    <h3>ACES - Association of Computer Engineering Students</h3>
                    <p> From Ideas to Innovation</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Slider
