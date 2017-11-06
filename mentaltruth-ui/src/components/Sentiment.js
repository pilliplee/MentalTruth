import React, { Component } from 'react';
import { Button, Grid, Image, Alert, Row, Col, Thumbnail } from 'react-bootstrap';
import neutral from '../images/confused.png';
import happy from '../images/happy.png';
import sad from '../images/sad.png';
import Carousel from '../components/Carousel';

const Sentiment = (props) => {
    return (
        <div>
            {props.gravity == 1 &&
                <Alert bsStyle="warning">
                <Image src={sad}/>
                  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
                </Alert>
            }
            {props.gravity == 2 &&
                <Alert bsStyle="info">
                <Image src={neutral}/><span><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>
                </Alert>
            }
            {props.gravity == 3 &&
                <Alert bsStyle="success">
                <Image  src={happy}/><span><strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.</span>
                </Alert>
            }
         
        </div>
    );
}

export default Sentiment;
