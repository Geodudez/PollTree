import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const submitPoll = (resultPoll) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      user_id: '2',
      tech: 'webpack',
      question1: resultPoll[0],
      question2: resultPoll[1],
      question3: resultPoll[2],
      question4: resultPoll[3],
      question5: resultPoll[4],
      question6: resultPoll[5],
    }),
    headers: new Headers({ 'content-type': 'application/json' }),
  };
  fetch('/api/pollResponse', options)
    //.then((response) => response.json())
    //.then((resp) => console.log(resp))
    .catch((err) => console.log(err.message));
  return <p>'Poll submitted, thank you for your contributions'</p>;
};

export default function SubmitButton(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to='/employeeProfile' style={{ textDecoration: 'none' }}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => submitPoll(props.results)}
        >
          Submit Poll
        </Button>
      </Link>
    </div>
  );
}
