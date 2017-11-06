import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Row, Col, Thumbnail, ControlLabel, FormControl  } from 'react-bootstrap';

class Handlers extends Component {
  
  static propTypes = {
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);
  }

  handleChange = (event, ...args) => {
    this.props.onChange(event,...args);
  }

  buildHandlers = (handler, index) => {
    return (
        <Col key={"column"+index} sm={3}>
           <ControlLabel key={"label"+index}>{handler}</ControlLabel>
           <FormControl key={"formGroup"+index} type="text" onChange={(event) => this.handleChange(event, 'handler')} placeholder="" />
      </Col>);
  }
  render (){

  return (
    <div className="handlers">
      <Grid fluid={true}>
        <div id="">
          <p>Lets help, enter your handlers:</p>
        </div>
        <Row>
          {
            this.props.handlers.map((handler, index) => (
              this.buildHandlers(handler, index)
            ))
          }
        </Row>
      </Grid>
    </div>

  );
}}

export default Handlers;
