import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';

const ExpensesSummary = (props) => (
  <div>
    { props.expenses.length > 0 &&
      <p>
        Viewing <strong>{props.expenses.length}</strong>
        {props.expenses.length === 1 ? ' Expense ' : ' Expenses '} 
        totaling <strong>{getTotalExpenses(props.expenses)}</strong>
      </p>
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
