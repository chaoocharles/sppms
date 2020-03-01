import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
 
 // Web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCLQtFMBbmT5x3G0u-aP0F8Jc9OVgdwn0k",
    authDomain: "sppms-74c4f.firebaseapp.com",
    databaseURL: "https://sppms-74c4f.firebaseio.com",
    projectId: "sppms-74c4f",
    storageBucket: "sppms-74c4f.appspot.com",
    messagingSenderId: "742699510237",
    appId: "1:742699510237:web:7eba671fde923ca78fee34",
    measurementId: "G-BQSLCEKXTD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore();
  export default firebase;