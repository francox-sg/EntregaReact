// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASNaDdbQXhL6QqgsMis11bEhuyAzwIgSA",
    authDomain: "pandora-ac020.firebaseapp.com",
    projectId: "pandora-ac020",
    storageBucket: "pandora-ac020.appspot.com",
    messagingSenderId: "157870867825",
    appId: "1:157870867825:web:9e6808a59bdf82c5a562d0"
};

// Initialize Firebase (del proyecto React al Proyecto en Firebase)
const app = initializeApp(firebaseConfig);

//Aca me traigo la db (de Firebase a la DB Firestore)
export const db = getFirestore(app)