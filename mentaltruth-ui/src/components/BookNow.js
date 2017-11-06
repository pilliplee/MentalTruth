import React, { Component, PropTypes } from 'react';
import { Button, Grid, Row, Col, Thumbnail, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import taxi_main from '../images/taxi2n.jpg';
import Carousel from '../components/Carousel'

const wellStyles = {   background: '#ffffff', margin: '10px auto 10px' };

const BookNow = (props) => {
    return (
        <div className="well" style={wellStyles}>
            <Form>
                <FormGroup controlId="formDate">
                    <Row sm={12}>
                        <Col sm={12}>
                            <ControlLabel>Date:</ControlLabel>
                            <FormControl type="date" placeholder="MM/DD/YYYY" />
                        </Col>
                    </Row>
                </FormGroup>
                <FormGroup controlId="formGuest">
                    <Row sm={12}>
                        <Col sm={12}>
                            <ControlLabel>Guest:</ControlLabel>
                            <FormControl type="text" placeholder="" />
                        </Col>
                    </Row>
                </FormGroup>

                <FormGroup controlId="formTime">
                    <Row sm={12}>
                        <Col sm={6}>
                            <ControlLabel>Start Time:</ControlLabel>
                            <FormControl type="time" placeholder="00:00:00" />
                        </Col>
                        <Col sm={6}>
                            <ControlLabel>End Time:</ControlLabel>
                            <FormControl type="time" placeholder="00:00:00" />
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
            <Button bsStyle="primary" bsSize="large" block>Book</Button>
        </div>

    );
}

export default BookNow;
