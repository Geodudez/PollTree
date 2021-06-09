import React from 'react';
import Link from '@material-ui/core/Link';
export default function EmployeeLogin() {
  return (
    <div className='LoginComponent-Holder'>
      {/* onclick to send to the employer page */}
      {/* <Link
        component='button'
        variant='body2'
        onClick={() => {
          console.info("I'm a button.");
          fetch('/auth/linkedin', {
            method: 'GET',
            redirect: 'follow',
          });
        }}
      >
        Sign in with LinkedIn
      </Link> */}
      <a href='/auth/linkedin'>Sign in with LinkedIn </a>
    </div>
  );
}
