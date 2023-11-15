import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcLgV20YR9tpBFYTTaujrc0CU7qt5cx9w",
  authDomain: "forify-8f47d.firebaseapp.com",
  projectId: "forify-8f47d",
  storageBucket: "forify-8f47d.appspot.com",
  messagingSenderId: "610981500126",
  appId: "1:610981500126:web:d5c51552c0482424559e4f",
  measurementId: "G-Z2C5X6KD7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };
