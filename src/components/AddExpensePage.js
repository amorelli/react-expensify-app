import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses'; // Import startAddExpense action generator

export class AddExpensePage extends React.Component {
  
  onSubmit = (expense) => { // Expense object received from ExpenseForm {description, amount, note, createdAt}
    this.props.startAddExpense(expense);
    this.props.history.push('/'); // Programmatically change pages, takes target page argument
  };

  render() {
    return (
      <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
        <div className="content-container">
          <ExpenseForm 
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); // With connect we have access to props.dispatch