import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import Modal from 'react-modal';
import moment from 'moment';

export class EditExpensePage extends React.Component {
 
  state = {
      selectedOption: false
  };

  onSubmit = (expense) => {
      this.props.startEditExpense(this.props.expense.id, expense);
      this.props.history.push('/');
  };

  openModal = () => {
      this.setState(() => ({selectedOption: true}));
  };

  closeModal = () => {
      this.setState(() => ({selectedOption: false}));
  };


  removeExpense = () => {
      this.props.startRemoveExpense({id: this.props.expense.id});
      this.props.history.push('/');
  };

  render() {
      return (
          <div>
              <div className="page-header">
                  <div className="content-container">
                      <h1 className="page-header__title">Edit Expense</h1>
                  </div>
              </div>
              
              <div className="content-container">
                  <ExpenseForm 
                      expense={this.props.expense}
                      onSubmit={this.onSubmit}
                  />
                  <button className="button button--secondary" onClick={this.openModal}>Remove Expense</button>
              </div>
              <Modal
                  isOpen={this.state.selectedOption}
                  contentLabel="Removing Expense"
                  onRequestClose={this.closeModal}
                  closeTimeoutMS={200}
                  className="modal"
              >
                      <p>Are you sure you want to remove <span>{this.props.expense.description}</span> from your expenses?</p>
                      <button className="button" onClick={this.removeExpense}>Yes</button>
                      <button className="button button--secondary" onClick={this.closeModal}>No</button>
              </Modal>
          </div>
      );
  }
}

const mapDispatchToProps = (dispatch, props) => (
  {
      startEditExpense: (expenseId, expense) => dispatch(startEditExpense(expenseId, expense)),
      startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
  }
);

const mapStateToProps = (state, props) => {
  return {
      expense: state.expenses.find((expense) => (expense.id === props.match.params.id))
  };
};  

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

