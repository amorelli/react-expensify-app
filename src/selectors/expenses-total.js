import numeral from 'numeral';

export default (expenses) => {
    const amount = expenses.reduce((count, {amount}) => count + amount, 0);
    return numeral(amount / 100).format('$0,0.00');
};