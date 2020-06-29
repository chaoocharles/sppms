import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import "firebase/functions";
import { firebaseConfig } from "./firebaseConfig";

// Web app's Firebase configuration

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore();
firebase.functions();
export default firebase;
