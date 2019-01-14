import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'; // Import startAddExpense action generator

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => { // Expense object received from ExpenseForm {description, amount, note, createdAt}
        props.dispatch(startAddExpense(expense));
        props.history.push('/'); // Programmatically change pages, takes target page argument
      }}
    />
  </div>
);

export default connect()(AddExpensePage); // With connect we have access to props.dispatch