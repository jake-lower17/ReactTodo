import firebase from 'firebase';

try {

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
}catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
