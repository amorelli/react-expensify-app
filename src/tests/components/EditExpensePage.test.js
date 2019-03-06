import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startRemoveExpense = jest.fn();
  startEditExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage 
      expense={expenses[1]} 
      startEditExpense={startEditExpense} 
      startRemoveExpense={startRemoveExpense} 
      history={history} 
    />
  );
});

// EditExpensePage Snapshot
it('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// startEditExpense
it('should handle startEditExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

// startRemoveExpense
it('should handle startRemoveExpense', () => {
  wrapper.find('button').at(1).prop('onClick')(expenses[1]);

  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});