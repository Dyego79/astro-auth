import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaxxeOTaNxGkfHaS2NUNdZhGo57XFg9yo",
  authDomain: "astro-authentication-bed1c.firebaseapp.com",
  projectId: "astro-authentication-bed1c",
  storageBucket: "astro-authentication-bed1c.appspot.com",
  messagingSenderId: "446303952789",
  appId: "1:446303952789:web:5b1ffcdcec691938d4209c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "es";
const firebase = { app, auth };

export { firebase as f };
