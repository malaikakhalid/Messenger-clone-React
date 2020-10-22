import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
 apiKey: "AIzaSyDdWbqm4a7tbv8i7pjUUtlQJL2QkdrDIYM",
  authDomain: "messanger-442bd.firebaseapp.com",
  databaseURL: "https://messanger-442bd.firebaseio.com",
  projectId: "messanger-442bd",
  storageBucket: "messanger-442bd.appspot.com",
  messagingSenderId: "266958283443",
  appId: "1:266958283443:web:c93fdda63d0f79f4d9c6c6",
  measurementId: "G-GPKZP67C50"
});

const db = firebaseConfig.firestore();

export default db;