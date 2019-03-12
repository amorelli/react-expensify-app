import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

// Render ExpenseListFilters
it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// Render ExpenseListFilters with alt data
it('should render ExpenseListFilters with alt data correctly', () => {
  expect(wrapper.setProps({ filters: altFilters })).toMatchSnapshot();
});

// onTextChange
it('should handle onTextChange', () => {
  const value = 'gas';
  wrapper.find('input').simulate('change', {
    target: { value }
  });

  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// sortByDate
it('should sortByDate', () => {
  const value = 'date';
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByDate).toHaveBeenCalled();
});

// sortByAmount
it('should sortByAmount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: { value }
  });

  expect(sortByAmount).toHaveBeenCalled();
});

// onDatesChange
it('should handle onDatesChange', () => {
  const startDate = altFilters.startDate;
  const endDate = altFilters.endDate;
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });

  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// onFocusChange
it('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
