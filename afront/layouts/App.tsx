import React from 'react';
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import LogIn from '@pages/Login';
import SignUp from '@pages/SignUp';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={LogIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default App;
