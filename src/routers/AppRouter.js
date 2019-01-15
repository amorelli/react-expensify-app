/* eslint-disable */

import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

// exact={true} prop tells react-router to match the exact route name
// Switch checks all routes for a match, and serves the one that does match.
// NotFoundPage matches with any route, so it is served by default if no other routes match
// Pass in history using history module, instead of BrowserRouter's history, so we can use it outside of component functions
const AppRouter = () => (
  <Router history={history}> 
    <div>
      <Switch>
      <Route path="/" component={LoginPage} exact={true} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/create" component={AddExpensePage}  />
      <PrivateRoute path="/edit/:id" component={EditExpensePage}  />
      <Route path="/help" component={HelpPage}  />
      <Route component={NotFoundPage} />
    </Switch>
    </div>
  </Router>
);

export default AppRouter;
