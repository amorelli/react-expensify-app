import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import getTotalExpenses from '../selectors/expenses-total';

const ExpensesSummary = (props) => (
  <div className="page-header">
    <div className="content-container">
      { props.expenses.length > 0 &&
        <h1 className="page-header__title">
          Viewing <span>{props.expenses.length}</span>
          {props.expenses.length === 1 ? ' Expense ' : ' Expenses '} 
          totaling <span>{getTotalExpenses(props.expenses)}</span>
        </h1>
      }
      { props.expensestotal.length - props.expenses.length > 0 &&
        <h3>
            Not showing {props.expensestotal.length - props.expenses.length} 
            {props.expensestotal.length - props.expenses.length === 1 ? ' expense ' : ' expenses '} because of filters.
        </h3>
      }
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Expense</Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensestotal: state.expenses,
    expensefilters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
