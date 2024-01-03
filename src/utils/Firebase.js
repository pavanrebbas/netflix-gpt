// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpXZ_WDYG6DaLyqXVKm7VSUD1jm1zgrFQ",
    authDomain: "netflixgpt-de89b.firebaseapp.com",
    projectId: "netflixgpt-de89b",
    storageBucket: "netflixgpt-de89b.appspot.com",
    messagingSenderId: "981581788220",
    appId: "1:981581788220:web:001f0b4ff14adf4e09bf39",
    measurementId: "G-1CT341VJLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// get auth in sign up and sign in form globally
export const auth = getAuth();