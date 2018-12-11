// Promise that resolves after 1.5 seconds. "Before" and "After" print before Promise is resolved, and then data is printed
// If Promise is rejected, and no catch call is added, browser will throw Uncaught Javascript Error
const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res({
    //   name: 'Adam',
    //   note: 'This is my resolved data.'
    // });
    rej('Uh Oh. Something went wrong.');
  }, 1500);
  console.log('Before');
}).then((data) => {
  console.log('1', data);
  return data; // Return data for a second .then call, otherwise data is Undefined
}).catch((e) => {
  console.log('Error message: ', e)
});

// .then((data) => {
//   console.log('2', data);
// });

console.log('After');