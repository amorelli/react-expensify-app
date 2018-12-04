import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses.js';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters.js';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  // console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2579, createdAt: 9999 }));
store.dispatch(addExpense({ description: 'Rent', amount: 7770, createdAt: 20000 }));

// Provider lets us define the store to provide to our components
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
