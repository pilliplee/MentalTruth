import React, { Component } from 'react';
import '../styles/styles.css'
import Handlers from '../components/Handlers';
import Resource from '../components/Resources';
import { Well, Panel, Button, Grid, Row, Col } from 'react-bootstrap';
import ReactSurvey from 'react-survey';
import SurveyForm from '../components/SurveyForm';
import Resources from '../components/Resources';
import Sentiment from '../components/Sentiment';
import YouTubePlayer from '../components/YouTubePlayer';
import getData from '../lib/api/request-get';
import { BASE_URL } from '../lib/api/settings';
import axios from 'axios';
import PropTypes from 'prop-types';

class MentalTruthHome extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      results:false,
      socialData: {},
      handler: '',
      gravity: 0
    };
  }
  handleChange = (event,...args) =>  {
    let property = args[0];
    let handler= event.target.value;
    if (property === 'handler'){
      this.setState({handler: handler});
      
    }
    if (property === 'survey'){
      this.setState({handler: handler});
      
    }
    
  }
  handleSocialDataSumbit = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3000/stuff',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Channel-Type': 'Internet',
        'mode': 'no-cors'
      },
      data: {
        ipAddress:"199.244.214.104",
        socialMediaInfo: {
          "Twitter":"karan.thakker"
        },
        surveyResponse:"anxiety"
      }	
    });
  }

  handleMentalTruthResponse = () => {
    // axios.get('http://localhost:3000/profile')
    // .then(response =>{
    //   this.setState(Object.assign({}, this.state, { results: true, gravity: 3 }))
    // });
  }

  componentWillUpdate(nextProps, nextState) {
  }

  render() {

    const showSentimentResults = (
      <Panel collapsible expanded={this.state.results}>
      <Sentiment gravity={1}/>
    </Panel> 
    );

    const handlers = ["Twitter"];

    const resourses = [{
      title: "What is bullying?"
     },
     {
      title: "What is bullying?"
     },
     {
      title: "What is bullying?"
     },
     {
      title: "What is bullying?"
     },
     ];

    return (
      <div>
        <div id="handlers">
          <Well>
              <Handlers handlers={handlers} onChange={(event, ...args) => this.handleChange(event, ...args)} />
          </Well>
          <Grid fluid={true}>   
            <Col xs={12} md={12}>
            { this.state && this.state.results &&
            <Panel collapsible expanded={this.state.results}>
              <Sentiment gravity={this.state.gravity}/>
            </Panel> }
              <Button onClick={() => this.setState({ open: !this.state.open })}>
                  To help us better understand you, please fill out the short survey
              </Button>           
              <Panel collapsible expanded={this.state.open}>
              <SurveyForm/>
            </Panel>
            <Button type="submit" onClick={() => this.handleMentalTruthResponse()}>
                Submit
            </Button>
            </Col>
            <Col xs={6} md={6}>  
              <Resources profiles={resourses}/>
            </Col>
            <Col xs={6} md={6}>    
              <Row>
                <Col xs={12} md={12}><YouTubePlayer videoID={"baqXeUOcyJw"}/></Col>
                <Col xs={12} md={12}><YouTubePlayer videoID={"baqXeUOcyJw"}/></Col>
              </Row> 
            </Col>         
          </Grid>     
        </div>
      </div>  
    );
  }
}

export default MentalTruthHome;
