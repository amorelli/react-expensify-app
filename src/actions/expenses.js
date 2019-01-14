import uuid from 'uuid';
import database from '../firebase/firebase';

// Changes the Redux store
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
  });

// Asynchronous function, fetches data from Firebase
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id 
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Setup expense action object with data
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// Gets initial expense data from Firebase
export const startSetExpenses = () => {
  return (dispatch) => {
    // Fetch data
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      // Parse data
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      // Get data in Redux
      dispatch(setExpenses(expenses));
    });
  };
};