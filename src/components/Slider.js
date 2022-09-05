import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({ start }) => {
    return (
        <Carousel fade>
            {start.map((item, index) => (
                <Carousel.Item>
                    <img className='d-block w-100' src={item} alt={`Slide # ${index}`} />
                </Carousel.Item>

            ))}
        </Carousel>
    )
}

export default Slider
