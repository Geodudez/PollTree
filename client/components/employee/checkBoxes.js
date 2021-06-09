import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function CheckBoxes(props) {
  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{props.question}</FormLabel>

      <FormGroup aria-label='position' row>
        <FormControlLabel
          value='top'
          control={<Checkbox color='primary' />}
          label='Strongly Agree'
          labelPlacement='top'
          idvalue='5'
        />
        <FormControlLabel
          value='top'
          control={<Checkbox color='primary' />}
          label='Agree'
          labelPlacement='top'
          idvalue='4'
        />
        <FormControlLabel
          value='top'
          control={<Checkbox color='primary' />}
          label='Neutral'
          labelPlacement='top'
          idvalue='3'
        />
        <FormControlLabel
          value='top'
          control={<Checkbox color='primary' />}
          label='Disagree'
          labelPlacement='top'
          idvalue='2'
        />
        <FormControlLabel
          value='top'
          control={<Checkbox color='primary' />}
          label='Strongly Disagree'
          labelPlacement='top'
          idvalue='1'
        />
      </FormGroup>
    </FormControl>
  );
}
