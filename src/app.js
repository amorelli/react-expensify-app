import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configStore from './store/configStore';
import { startSetExpenses } from './actions/expenses.js';
import { login, logout } from './actions/auth.js';
import getVisibleExpenses from './selectors/expenses';
import getTotalExpenses from './selectors/expenses-total';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
// import './playground/promises';

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log('Visible Expenses: ', visibleExpenses);
  // const totalExpenses = getTotalExpenses(state.expenses);
  // console.log('Total expenses: ', totalExpenses);
});

// store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 2579, createdAt: 9999 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 7770, createdAt: 20000 }));

// Provider lets us define the store to provide to our components
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// Login and Logout
firebase.auth().onAuthStateChanged((user) => {
  if (user) {   // Check if user is logged in
    store.dispatch(login(user.uid)); // Keep track of logged in user with Redux
    store.dispatch(startSetExpenses()).then(() => { // Fetch expenses
      renderApp();
      if (history.location.pathname === '/') { // Only redirect logged in user to dashboard if on Login page
        history.push('/dashboard');
      };
    });
  } else { // Log out
    store.dispatch(logout()); // Send LOGOUT action to Redux
    renderApp();
    history.push('/');
  }
});