import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA_TAmu2ovxTzWNDS4uWnVDDfK4wTlhjic',
  authDomain: 'todo-app-8308a.firebaseapp.com',
  databaseURL: 'https://todo-app-8308a.firebaseio.com',
  storageBucket: 'todo-app-8308a.appspot.com',
  messagingSenderId: '80769008489',
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0',
  },
  isRunning: true,
  user: {
    name: 'Jake',
    age: 27,
  },
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New Todo Added ', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Todo 1'
});

todosRef.push({
  text: 'Todo 2'
});
