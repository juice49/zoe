'use strict';

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Layout from '../components/layout';
import Home from '../components/home';

const Routes = props => (
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path='/' component={Home} />
    </Route>
  </Router>
);

export default Routes;