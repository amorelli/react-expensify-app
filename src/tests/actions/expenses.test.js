import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

it('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

it('should set up edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  })
});

it('should set up add expense object with provided values', () =>{
  const expenseData = {
    description: 'Rent',
    amount: 109500, 
    createdAt: 1000,
    note: 'Last months rent'
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData
    }
  });
});

it('should set up add expense object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {}
  })
});