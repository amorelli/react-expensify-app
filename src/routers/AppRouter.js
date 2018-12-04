/* eslint-disable */

import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

// exact={true} prop tells react-router to match the exact route name
// Switch checks all routes for a match, and serves the one that does match.
// NotFoundPage matches with any route, so it is served by default if no other routes match
const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true} />
    <Route path="/create" component={AddExpensePage}  />
    <Route path="/edit/:id" component={EditExpensePage}  />
    <Route path="/help" component={HelpPage}  />
    <Route component={NotFoundPage} />
  </Switch>
  </div>
</BrowserRouter>
);

export default AppRouter;
