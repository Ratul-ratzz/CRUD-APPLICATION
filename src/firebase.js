import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD71osQbPjDAD_U43dPUqA8-xIy-yi-Yhw",
  authDomain: "crud-b1570.firebaseapp.com",
  projectId: "crud-b1570",
  storageBucket: "crud-b1570.appspot.com",
  messagingSenderId: "512814790077",
  appId:"1:512814790077:web:577b0fe608442804fcced4",
  measurementId: "G-WR6ZHGHN8L",
};
// Initialize Firebase
const FirebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default FirebaseApp;
export { db };
