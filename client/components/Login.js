import React from 'react';
import EmployeeProfile from './employee/employeeProfile';
import EmployerProfile from './employer/EmployerProfile';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
        <div>Employee</div>
        <div>Employer</div>
      </div>
      <div>How would you like to login?</div>
      <div>
        <TextField
          id='outlined-helperText'
          label='Username'
          // defaultValue='Default Value'
          // helperText='Some important text'
          variant='outlined'
        />
        <TextField
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='outlined'
        />
      </div>
      {/* <EmployeeProfile /> */}
      {/* <EmployerProfile /> */}
    </div>
  );
}

export default LoginComponent;
