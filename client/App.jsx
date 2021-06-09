import React from 'react';
import LoginComponent from './components/Login.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployerLogin from './components/employer/EmployerLogin.js';
import EmployeeLogin from './components/employee/employeeLogin';
import EmployeeProfile from './components/employee/employeeProfile.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <LoginComponent />} />
        <Route path='/employeeLogin' render={() => <EmployeeLogin />} />
        <Route path='/employerLogin' render={() => <EmployerLogin />} />
      </Switch>
    </BrowserRouter>
    // <EmployeeProfile></EmployeeProfile>
  );
}

{
  /* <BrowserRouter>
<Switch>

  <Route path='/employeeLogin' render={() => <EmployeeLogin />} />
  <Route path='/employerLogin' render={() => <EmployerLogin />} />
</Switch>
</BrowserRouter> */

  {
    /* <div className='App'>
      LOGIN!
      <LoginComponent />
    </div> */
  }
}

//yo wassup dawgs

export default App;
