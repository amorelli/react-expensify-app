import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: '',
    };
  }
  // Description and Note are tracked by the state and updated
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ) { // Matches a string starting (^) with a decimal (\d) continue to match decimals (*)
      this.setState(() => ({ amount }));       // Matches 0 to 1 groups ( ()? ) of a period (\.) and between 0 and 2 decimals (\d{0,2}) 
    }                                          // then stop matching ($)
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({focused}) => {
    this.setState(() => ({ focused }));
  };
  onSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh, handle form submission with JS
    // Error message if Description & Amount are blank
    if ( !this.state.description || !this.state.amount ) {
      this.setState(() => ({ error: 'Please provide Description and Amount.' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({ // This object is passed up to AddExpensePage when AddExpensePage calls onSubmit
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description} // Grab the description value from the state
            onChange={this.onDescriptionChange} // Set the state of the description value
          />
          <input 
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your expense."  
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}