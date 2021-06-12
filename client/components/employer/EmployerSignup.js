import TextField from '@material-ui/core/TextField';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const EmployerSignup = (props) => {
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
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userInfo),
    });
  };

  return (
    <div className='LoginComponent-Holder'>
      <TextField
        id='outlined-helperText'
        label='Create Username'
        // defaultValue='Default Value'
        // helperText='Some important text'
        variant='outlined'
        onChange={handleUsernameInput}
      />
      <TextField
        id='outlined-password-input'
        label='Create Password'
        type='password'
        autoComplete='current-password'
        variant='outlined'
        onChange={handlePasswordInput}
      />
      {/* onclick to send to the employer page */}
      <Link to='/employerProfile' style={{ textDecoration: 'none' }}>
        <Button onClick={handleClick}>SUBMIT</Button>
      </Link>
    </div>
  );
};

export default EmployerSignup;
