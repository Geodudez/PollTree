import React from 'react';

import EmployeeProfile from './employee/employeeProfile';
import EmployerProfile from './employer/EmployerProfile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployerLogin from './employer/EmployerLogin.js';
import EmployeeLogin from './employee/employeeLogin';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function LoginComponent() {
  const classes = useStyles();
  return (
    <div className='LoginComponent-Holder'>
      {/* <img src='https://ibb.co/0XQjHsW'></img> */}
      <div id='employee-employer-login-nav'>
        <Link to='/employeeLogin' style={{ textDecoration: 'none' }}>
          <Button className='button'>Employee</Button>
        </Link>
        <Link to='/employerLogin' style={{ textDecoration: 'none' }}>
          <Button className='button'>Employer</Button>
        </Link>
      </div>
      <div>How would you like to log in?</div>
    </div>
  );
}

export default LoginComponent;
