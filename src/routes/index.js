import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Redirect } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import SignUp from '~/pages/Auth/SignUp';
import SignIn from '~/pages/Auth/SignIn';
import Main from '~/pages/Main';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/signin" component={SignIn} />
      <Guest path="/signup" component={SignUp} />
      <Private path="/" exact component={Main} />
      <Private path="/account" component={Main} />
      <Redirect from="*" to="/" />
      <Private component={NoMatch} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
