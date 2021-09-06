import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/storage";
import "firebase/firestore";
import config from "../config/config.json";


firebase.initializeApp(config.firebaseConfig);

export const firestore = firebase.firestore();
