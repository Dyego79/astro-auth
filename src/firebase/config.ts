// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaxxeOTaNxGkfHaS2NUNdZhGo57XFg9yo",
  authDomain: "astro-authentication-bed1c.firebaseapp.com",
  projectId: "astro-authentication-bed1c",
  storageBucket: "astro-authentication-bed1c.appspot.com",
  messagingSenderId: "446303952789",
  appId: "1:446303952789:web:5b1ffcdcec691938d4209c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "es";
export const firebase = { app, auth };
