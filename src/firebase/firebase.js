import * as firebase from 'firebase';
//
//  INITIALIZE
//
const config = {
  apiKey: "AIzaSyCFm5nRHYNwRjh124QRF2NbkqqBd_T2kak",
  authDomain: "expensify-e4d0a.firebaseapp.com",
  databaseURL: "https://expensify-e4d0a.firebaseio.com",
  projectId: "expensify-e4d0a",
  storageBucket: "expensify-e4d0a.appspot.com",
  messagingSenderId: "885962097218"
};

firebase.initializeApp(config);

const database = firebase.database();

//
//  SET INITIAL DATA
//
// ref() gives us a reference to a specific part of our database (Different collections)
// Not passing anything in is a reference to the root
database.ref().set({
  name: 'Adam',
  age: 33,
  isCool: true,
  stressLevel: 7,
  location: {
    city: 'Raleigh',
    country: 'United States'
  },
  job: {
    title: 'Developer',
    company: 'Google'
  }
}).then(() => {
  console.log('Data is saved.');
}).catch((e) => {
  console.log('This failed -> ', e)
});

//
//  UPDATE
//
database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

//
// UPDATE EXAMPLE - (Update will update, add and remove properties)
//
// // .update({}) will add new properties, update and delete current properties. Passed with an Object
// database.ref().update({
//   name: 'Jen',
//   age: 27,
//   job: 'Nurse',
//   isCool: null,
//   // location: { city: 'Boston' } // This will replace the original Object with a new Object, so unkept data is deleted
//   'location/city': 'Boston' // Use / to modify specific keys within objects
// });

//
// REMOVE EXAMPLE
//
// Passing null will remove the data, or calling remove
// database.ref('isCool').set(null);

// database.ref('isCool').remove()
// .then(() => console.log('isCool has been removed'))
// .catch((e) => console.log('Uh Oh...', e));

// database.ref('attributes')
// .set({height: '6\'0', weight: '195lbs'})
// .then(() => console.log('Attributes have been updated'))
// .catch((e) => console.log('Set call to attributes failed'));