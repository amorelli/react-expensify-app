import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Default State
it('should set up default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([]);
});

// Remove Expense By ID
it('should remove an expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[0], expenses[2]]);
});

// Not Remove Expense if wrong ID
it('should not remove an expense if no id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

// Add Expense
it('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Food',
    note: '',
    amount: 3000,
    createdAt: 10000
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([...expenses, expense]);
});

// Edit Expense by ID
it('should edit an expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'Rent payment update',
      amount: 209500
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state[1]).toHaveProperty('note', action.updates.note);
});

// Not Edit Expense if bad ID
it('should not edit an expense if no id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'Rent payment update',
      amount: 209500
    }
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});