import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Default Values
it('should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('year'),
    endDate: moment().endOf('month')
  });
});

// Sort By Amount
it('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

// Sort By Date
it('should set sort by to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE' };

  const state = filtersReducer(currentState, action);

  expect(state.sortBy).toBe('date');
});

// Set Text Filter
it('should set up text filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'Gas' });

  expect(state.text).toBe('Gas');
});

// Set Start Date
it('should set start date filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) });

  expect(state.startDate).toEqual(moment(0));
});

// Set End Date
it('should set end date filter', () => {
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0) });

  expect(state.endDate).toEqual(moment(0));
});