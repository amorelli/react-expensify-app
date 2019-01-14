import * as firebase from 'firebase';
//
//  INITIALIZE
//
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

//
//  DUMMY DATA
//
// database.ref('expenses').push({
//   description: 'Rent',
//   amount: 1200,
//   createdAt: 12345,
//   note: '',
// });

// database.ref('expenses').push({
//   description: 'Food',
//   amount: 500,
//   createdAt: 12345,
//   note: '',
// });

// database.ref('expenses').push({
//   description: 'Electricity',
//   amount: 800,
//   createdAt: 12345,
//   note: '',
// });

// database.ref("notes").push({
//   title: 'Course topics',
//   body: 'React, Javascript, Python'
// });

// const firebaseNotes = {
//   notes: {
//     ab123: {
//       title: 'My first note',
//       body: 'This is my note'
//     },
//     5678: {
//       title: 'Another note',
//       body: 'This is another note'
//     }
//   }
// };

//
//  SET INITIAL DATA
//
// ref() gives us a reference to a specific part of our database (Different collections)
// Not passing anything in is a reference to the root
// database.ref().set({
//   name: 'Adam',
//   age: 33,
//   isCool: true,
//   stressLevel: 7,
//   location: {
//     city: 'Raleigh',
//     country: 'United States'
//   },
//   job: {
//     title: 'Developer',
//     company: 'Google'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((e) => {
//   console.log('This failed -> ', e)
// });

//
//  UPDATE
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

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