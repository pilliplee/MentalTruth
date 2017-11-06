import React, { Component } from 'react';
import { Checkbox, Radio, ControlLabel, FormControl, FormGroup, Button, HelpBlock  } from 'react-bootstrap';


class SurveyForm extends Component {
    render() {
        return (
            <form>
            <FormGroup>
                <ControlLabel>Question 1 </ControlLabel>
                <Checkbox inline>
                Answer 1
                </Checkbox>
                {' '}
                <Checkbox inline>
                Answer 2
                </Checkbox>
                {' '}
                <Checkbox inline>
                Answer 3
                </Checkbox>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Question 1 </ControlLabel>
                <Radio name="radioGroup" inline>
                Option 1
                </Radio>
                {' '}
                <Radio name="radioGroup" inline>
                Option 2
                </Radio>
                {' '}
                <Radio name="radioGroup" inline>
                Option 3
                </Radio>
            </FormGroup>
            </form>
        );
    }
};
export default SurveyForm ;