import React from 'react';
import LoginComponent from './components/Login.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EmployerLogin from './components/employer/EmployerLogin.js';
import EmployeeLogin from './components/employee/employeeLogin';

function App() {
  return (
    <div className='App'>
      LOGIN!
      <LoginComponent />
    </div>
  );
}

{
  /* <BrowserRouter>
<Switch>
  <Route path='/employeeLogin' render={() => <EmployeeLogin />} />
  <Route path='/employerLogin' render={() => <EmployerLogin />} />
</Switch>
</BrowserRouter> */
}

//yo wassup dawgs

export default App;
