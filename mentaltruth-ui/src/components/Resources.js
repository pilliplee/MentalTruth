import React, { Component, PropTypes } from 'react';
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import bullying from '../images/bullying.jpg';
import Carousel from '../components/Carousel'

const Resources = (props) => {
  const buildProfile = (resource, index) => {
    return (
      <Col key={index} xs={6} md={6}>
        <Thumbnail src={bullying} key={index} className="profile_thumbnail">
          <h3>{resource.name}</h3>
          <h4 className="h4-header">{resource.title}</h4>
          <p>{resource.description}</p>
        </Thumbnail>
      </Col>);
  }
  return (
    <div className="profiles">
      <Grid fluid={true}>
        <div id="profiles_header">
        </div>
        <Row>
          {
            props.profiles.map((profile, index) => (
              buildProfile(profile, index)
            ))
          }
        </Row>
      </Grid>
    </div>

  );
}

export default Resources;
