import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push('/dashboard');
        }}
      />
      <button onClick={(e) => {
        props.dispatch(startRemoveExpense({ id: props.expense.id }))
        props.history.push('/dashboard');
      }}>Remove</button>
    </div>
  );
};
// Make sure this component has access to the expense object
const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);