import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/storage";
import "firebase/compat/firestore";
import config from "../config/config.json";


export const app = firebase.initializeApp(config.firebaseConfig);

// export const firestore = app.firestore();
