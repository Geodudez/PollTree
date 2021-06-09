import TextField from '@material-ui/core/TextField';

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <Link to='/employerProfile' onClick={grabInfo}>
        <div>work around Allison</div>
      </Link>
      <button onClick={handleClick}>SUBMIT</button>
      <div> Not a user? </div>
      {/* <a href='/employer-signup'>sign up</a> */}
      <Link to='/employerSignup' onClick={() => console.log('clicked')}>
        sign up
      </Link>
    </div>
  );
};

export default EmployerLogin;
