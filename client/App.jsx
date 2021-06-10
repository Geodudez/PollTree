import React from 'react';
import LoginComponent from './components/Login.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployerLogin from './components/employer/EmployerLogin.js';
import EmployeeLogin from './components/employee/employeeLogin';
import EmployeeProfile from './components/employee/employeeProfile.js';
import EmployerSignup from './components/employer/EmployerSignup.js';
import EmployerProfile from './components/employer/EmployerProfile.js';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <LoginComponent />} />
        <Route path='/employeeLogin' render={() => <EmployeeProfile />} />
        <Route path='/employerLogin' render={() => <EmployerLogin />} />
        <Route path='/employerSignup' render={() => <EmployerSignup />} />
        <Route path='/employerProfile' render={() => <EmployerProfile />} />
        <Route
          exact
          path='/employeeProfile'
          render={() => <EmployeeProfile />}
        />
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
