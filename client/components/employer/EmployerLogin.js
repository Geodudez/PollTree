import TextField from '@material-ui/core/TextField';

import React from 'react';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

const EmployerLogin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameInput = (event) => {
    event.preventDefault();
    console.log('setting username');
    setUsername(event.target.value);
  };

  const handlePasswordInput = (event) => {
    event.preventDefault();
    console.log('setting password');
    setPassword(event.target.value);
  };
  const userInfo = { username: username, password: password };
  const handleClick = () => {
    setPassword('');
    setUsername('');
    document.getElementById('outlined-helperText').value = '';
    document.getElementById('outlined-password-input').value = '';
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });
  };

  const grabInfo = () => {
    fetch('/api/getAllData')
      .then((res) => res.json())
      .then((res) => {
        console.log('i got data');
        console.log('res', res);
        setPieData(res);
      });
  };

  return (
    <div className='LoginComponent-Holder'>
      <TextField
        id='outlined-helperText'
        label='Username'
        // defaultValue='Default Value'
        // helperText='Some important text'
        variant='outlined'
        onChange={handleUsernameInput}
      />
      <TextField
        id='outlined-password-input'
        label='Password'
        type='password'
        autoComplete='current-password'
        variant='outlined'
        onChange={handlePasswordInput}
      />
      {/* onclick to send to the employer page */}
      {/* <Redirect
        to={{
          pathname: '/employerProfile',
          state: { pieData: pieData },
        }}
      /> */}
      <Link to='/employerProfile' style={{ textDecoration: 'none' }}>
        <Button onClick={handleClick}>SUBMIT</Button>
      </Link>

      <div> Not a user? </div>
      <Link
        to='/employerSignup'
        style={{ textDecoration: 'none' }}
        onClick={() => console.log('clicked')}
      >
        sign up
      </Link>
    </div>
  );
};

export default EmployerLogin;
