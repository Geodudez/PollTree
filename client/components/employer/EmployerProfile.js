import PieContainer from './PieContainer';
import EmployerProfileNav from './EmployerProfileNav';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WorkerList from './WorkerList.js';
import Messages from './Messages.js';

const EmployerProfile = (props) => {
  return (
    <div>
      <BrowserRouter>
        <EmployerProfileNav />
        {/* <PieContainer /> */}
        <Switch>
          <Route path='/pieContainer' render={() => <PieContainer />} />
          <Route path='/messages' render={() => <Messages />} />
          <Route path='/workerList' render={() => <WorkerList />} />
        </Switch>
      </BrowserRouter>
      {/* <p> Employer Profile </p> */}
    </div>
  );
};

export default EmployerProfile;
