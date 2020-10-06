import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// THIS IS USED TO INITIALIZE THE firebase OBJECT
// PUT YOUR FIREBASE PROJECT CONFIG STUFF HERE
var firebaseConfig = {
  apiKey: "AIzaSyDV6_jH8N5FtPb9oH25rRpXBKb4EtmcSlI",
  authDomain: "final-project-d7098.firebaseapp.com",
  databaseURL: "https://final-project-d7098.firebaseio.com",
  projectId: "final-project-d7098",
  storageBucket: "final-project-d7098.appspot.com",
  messagingSenderId: "274159144779",
  appId: "1:274159144779:web:666ffbd36287caee5862ce",
  measurementId: "G-2YWJCT85S7"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// NOW THE firebase OBJECT CAN BE CONNECTED TO THE STORE
export default firebase;