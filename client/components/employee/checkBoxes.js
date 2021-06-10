import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import NextButton from './nextButton';
import { CheckBox } from '@material-ui/icons';
const tentativeArr = [];

export default function CheckBoxes(props) {
  
  const [boolean1,setBool1] = useState(false);
  const [boolean2,setBool2] = useState(false);
  const [boolean3,setBool3] = useState(false);
  const [boolean4,setBool4] = useState(false);
  const [boolean5,setBool5] = useState(false);


  return (
    <div>
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{props.question}</FormLabel>

      <FormGroup aria-label='position' row>
        <FormControlLabel
          value='top'
          checked = {boolean1}
          control={<Checkbox color='primary' />}
          label='Strongly Agree'
          labelPlacement='top'
          idvalue='5'
          onClick={() => {
            tentativeArr.push(5);
            setBool1(boolean => !boolean)
          }}
        />
        <FormControlLabel
          value='top'
          checked = {boolean2}
          control={<Checkbox color='primary' />}
          label='Agree'
          labelPlacement='top'
          idvalue='4'
          onClick={() => {
            tentativeArr.push(4);
            setBool2(boolean => !boolean)
          }}
        />
        <FormControlLabel
          value='top'
          checked = {boolean3}
          control={<Checkbox color='primary' />}
          label='Neutral'
          labelPlacement='top'
          idvalue='3'
          onClick={() => {
            tentativeArr.push(3);
            setBool3(boolean => !boolean)
          }}
        />
        <FormControlLabel
          value='top'
          checked = {boolean4}
          control={<Checkbox color='primary' />}
          label='Disagree'
          labelPlacement='top'
          idvalue='2'
          onClick={() => {
            tentativeArr.push(2);
            setBool4(boolean => !boolean)
            
          }}
        />
        <FormControlLabel
          value='top'
          checked = {boolean5}
          control={<Checkbox color='primary' />}
          label='Strongly Disagree'
          labelPlacement='top'
          idvalue='1'
          onClick={() =>
            {
            tentativeArr.push(1);
            setBool5(boolean => !boolean)
          }}
        />
      </FormGroup>
    </FormControl>

    <NextButton
          setQuestion={props.setQuestion}
          currentQuestion={props.currentQuestion}
          results={props.results}
          tentativeArr={tentativeArr}
        />
    </div>
  );
}
