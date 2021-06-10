import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function NextButton(props) {
    const classes = useStyles();
    let currentQuestion = 0
    return (

  
    <div className={classes.root}>
      
      <Button variant="outlined" color="primary" onClick={() => {
        props.setQuestion(props.currentQuestion + 1);
        props.results.push(props.tentativeArr[props.tentativeArr.length-1])
        }}>
        Next
      </Button>
      
    </div>
  
    )
}