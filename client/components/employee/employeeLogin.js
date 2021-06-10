import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
export default function EmployeeLogin() {
  //set some state with hooks
  const [redirect, setRedirect] = useState(false);

  const setToTrue = () => {
    setRedirect(true);
  };

  if (redirect === false) {
    return (
      <div className='LoginComponent-Holder'>
        <a href='http://localhost:8080/auth/linkedin'>Sign in with LinkedIn </a>
        <Link to='/employeeProfile'>
          <div>work around Allison</div>
        </Link>
      </div>
    );
    // setRedirect(true);
  }
  if (redirect === true) {
    return <Redirect to='/employeeProfile' />;
  }
}
