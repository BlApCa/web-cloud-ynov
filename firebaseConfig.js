// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1sEGySlAGwxnbNhpFw0Dw8XtKjENapFk",
    authDomain: "web-cloud-ynov-b3519.firebaseapp.com",
    projectId: "web-cloud-ynov-b3519",
    storageBucket: "web-cloud-ynov-b3519.appspot.com",
    messagingSenderId: "556550412430",
    appId: "1:556550412430:web:460f4cd8ae1af218a851df",
    measurementId: "G-101TD9HG9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
