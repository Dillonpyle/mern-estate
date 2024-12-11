// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-14115.firebaseapp.com",
  projectId: "mern-estate-14115",
  storageBucket: "mern-estate-14115.firebasestorage.app",
  messagingSenderId: "529424095782",
  appId: "1:529424095782:web:eb800aa29e44dc528064e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);