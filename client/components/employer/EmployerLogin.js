import TextField from '@material-ui/core/TextField';
import React from 'react';
const EmployerLogin = (props) => {
  return (
    <div className='LoginComponent-Holder'>
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
      {/* onclick to send to the employer page */}
      <button>SUBMIT</button>
    </div>
  );
};

export default EmployerLogin;
