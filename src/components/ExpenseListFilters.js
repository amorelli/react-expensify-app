import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

// We read off the store from this component
class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  handleFocus = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input 
              type="text"
              className="text-input"
              placeholder="Search Expenses"
              value={this.props.filters.text} // Value set based on the text filter from the store
              onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value)); // Set the store text filter based on the user-input value
            }} />
          </div>
          <div className="input-group__item">
            <select 
              className="select"
              value={this.props.filters.sortBy} 
              onChange={(e) => {
                if (e.target.value === "date") {
                  this.props.dispatch(sortByDate());
                } else if (e.target.value === "amount") {
                  this.props.dispatch(sortByAmount()); // As we change the select, the store value changes, as the store changes, the value of select changes
                }
              }}>
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker 
              startDate={this.props.filters.startDate}
              startDateId='start'
              endDateId='end'
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.handleFocus}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);