import React from 'react'
import './App.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

export default class Projects extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider>
                    <Slide index={0}>I am the first Slide.</Slide>
                    <Slide index={1}>I am the second Slide.</Slide>
                    <Slide index={2}>I am the third Slide.</Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        )
    }
}