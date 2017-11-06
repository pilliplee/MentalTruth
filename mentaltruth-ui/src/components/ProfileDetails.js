import React, { Component, PropTypes } from 'react';
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import taxi_main from '../images/taxi2n.jpg';
import Carousel from '../components/Carousel';
import BookNow from '../components/BookNow'

const ProfileDetails = (props) => {
    return (
        <div>
            <div id="main_carousel">
                <Carousel src={taxi_main} label="Profile Details Pic" />
            </div>
            <Grid fluid={true}>
                <Col smHidden={true} md={2} />
                <Col xs={12} md={8} lg={8}>
                    <Col xs={12} md={7}>
                        <h3 className="h3-header">Millers By The Sea</h3>
                        <h4 className="h4-header">Ernest Aaron</h4>
                        <p className="descriptions">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                    <Col xs={12} md={5} lg={5}>
                        <BookNow />
                    </Col>
                </Col>
                <Col smHidden={true} md={2} />
            </Grid>
        </div>

    );
}

export default ProfileDetails;
