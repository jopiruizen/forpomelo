
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCg4h9OXBLnmAdt-jOsiYtlEXifQt6F1_4",
    authDomain: "pomelopay-58960.firebaseapp.com",
    databaseURL: "https://pomelopay-58960.firebaseio.com",
    projectId: "pomelopay-58960",
    storageBucket: "pomelopay-58960.appspot.com",
    messagingSenderId: "1094756879719",
    appId: "1:1094756879719:web:2d9039507c098b65b5b3c2",
    measurementId: "G-GDED8DYXJD"
};
firebase.initializeApp(config);
export default firebase;

export const db = firebase.firestore();