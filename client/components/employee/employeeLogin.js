import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
export default function EmployeeLogin() {
  //set some state with hooks
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    fetch('http://localhost:8080/auth/linkedin', {
      method: 'GET',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => setRedirect(true))
      // .then((res) => console.log(JSON.stringify(res)))
      .catch((err) => console.log('there is an error', err));
  };

  if (redirect === false) {
    return (
      <div className='LoginComponent-Holder'>
        <Button onClick={handleClick}>
          {' '}
          <LinkedInIcon />
          Sign in with LinkedIn
        </Button>
        {/* <a href='http://localhost:8080/auth/linkedin'>Sign in with LinkedIn </a> */}
      </div>
    );
  }
  if (redirect === true) {
    return <Redirect to='/employeeProfile' />;
  }
}

// {
//   /* <Link to='/employeeProfile'>
//   <div>work around Allison</div>
// </Link>; */
// }
