import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCbTsxvJi61tJEvkgYrDGyuUQMsZnFj7zA",
    authDomain: "dataformfb.firebaseapp.com",
    databaseURL: "https://dataformfb-default-rtdb.firebaseio.com",
    projectId: "dataformfb",
    storageBucket: "dataformfb.appspot.com",
    messagingSenderId: "726295850465",
    appId: "1:726295850465:web:7617e2dfcbe088b14af6a0"
});
  // Initialize Firebase
  var db = firebaseApp.firestore();

  export { db };
