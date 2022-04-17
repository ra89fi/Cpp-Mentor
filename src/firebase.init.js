// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB_JpyxCcojKMmxSE4S6PsCpfcAoQZmKXI',
    authDomain: 'simple-firebase-authenti-172f8.firebaseapp.com',
    projectId: 'simple-firebase-authenti-172f8',
    storageBucket: 'simple-firebase-authenti-172f8.appspot.com',
    messagingSenderId: '787534560495',
    appId: '1:787534560495:web:3a647b937b32b5b9a82f1a',
    // measurementId: "G-SEGT3SQK65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
