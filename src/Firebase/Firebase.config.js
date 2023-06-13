// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ3rbmGQnZsI1x3x1x6ySr79OLkfQ3dVI",
    authDomain: "miah-kitchen.firebaseapp.com",
    projectId: "miah-kitchen",
    storageBucket: "miah-kitchen.appspot.com",
    messagingSenderId: "203169995301",
    appId: "1:203169995301:web:8851ce569bd2f7a8203dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;