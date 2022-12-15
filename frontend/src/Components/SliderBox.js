import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/slider/img1.png';
import img2 from '../assets/slider/img2.png';

export default class SliderBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={img1}
                    alt='library'
                />
                <Carousel.Caption>
                    <h3>ALibrary</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={img2}
                    alt='library'
                />
                <Carousel.Caption>
                    <h3>ALibrary</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
  }
}
