import firebase from 'firebase/app';
import '@firebase/storage';
import '@firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAmUrBk9HNFFqbrQX_W8lalZiIu2YX9MBs',
  authDomain: 'firegram-be72d.firebaseapp.com',
  projectId: 'firegram-be72d',
  storageBucket: 'firegram-be72d.appspot.com',
  messagingSenderId: '315682376024',
  appId: '1:315682376024:web:ea5997ac572d4dc046fd2d',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage(); //invoking it initiates our storage service
const appFirestore = firebase.firestore(); //initiates database service
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //evaluates to a function that will create a timestamp

export { appStorage, appFirestore, timestamp };
