import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'browserHistory';
import Home from 'Home';
import Project from 'Project';
import Authenticate from 'Auth/Authenticate';
import PageError from 'shared/components/PageError';

const Routes = () => (
  <Router history={history}>
    <Switch>
      {/* <Redirect exact from="/" to="/project" /> */}
      <Route exact path="/" component={Home} />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/project" component={Project} />
      <Route component={PageError} />
    </Switch>
  </Router>
);

export default Routes;
