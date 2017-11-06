import React from 'react';
import { Carousel } from 'react-bootstrap';

const carousel = (props) => {
    // let carouselComponent = 
    return(
        <Carousel interval={props.interval}>
        <Carousel.Item>
            <img width={"100%"} height={100} alt="" src={props.src}/>
            <Carousel.Caption>
                <h3>{props.label}</h3>
                <p>{props.desc}</p>
            </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
            <img width={"100%"} height={100} alt="" src={props.src}/>
            <Carousel.Caption>
                <h3>{props.label}</h3>
                <p>{props.desc}</p>
            </Carousel.Caption>
        </Carousel.Item>
         <Carousel.Item>
            <img width={"100%"} height={100} alt="" src={props.src}/>
            <Carousel.Caption>
                <h3>{props.label}</h3>
                <p>{props.desc}</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
)};

export default carousel;
// ReactDOM.render(carousel, mountNode);;