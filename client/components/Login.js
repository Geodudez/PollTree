import React from 'react';

import EmployeeProfile from './employee/employeeProfile';
import EmployerProfile from './employer/EmployerProfile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployerLogin from './employer/EmployerLogin.js';
import EmployeeLogin from './employee/employeeLogin';

import { makeStyles } from '@material-ui/core/styles';
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
      <div id='employee-employer-login-nav'>
        <Link to='/employeeLogin'>
          <div>Employee</div>
        </Link>
        <Link to='/employerLogin'>
          <div>Employer</div>
        </Link>
      </div>
      <div>How would you like to log in?</div>
    </div>
  );
}

export default LoginComponent;
