import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SliderBox from '../Components/SliderBox';
import New from '../Pages/New'
// import Carousel from 'react-bootstrap/Carousel';

export default class Home extends Component {
  render() {
    return (
      <>
        <SliderBox />
        <div class="d-flex justify-content-center"><h1>NEW BOOKS!</h1></div>

        <div class="d-flex justify-content-center">
          <div class="mr-auto p-2">
            <div class="d-flex justify-content-center">

              <New />
            </div>

            <div class="d-flex justify-content-center">
              <Button href='/books' size="lg">
                ALL BOOKS!
              </Button>

            </div>
          </div>
        </div>
      </>
    )
  }
}
