// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDVfAcF9EwIkmUknl3tP9x1YTvROfBet4c',
  authDomain: 'innervision-todo.firebaseapp.com',
  databaseURL: 'https://innervision-todo.firebaseio.com',
  projectId: 'innervision-todo',
  storageBucket: 'innervision-todo.appspot.com',
  messagingSenderId: '148299300634',
  appId: '1:148299300634:web:d9744c037e3f25ed7a76a3',
  measurementId: 'G-33PKHLF8RY',
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export { db };
