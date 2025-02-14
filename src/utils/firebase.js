// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE0ozHjHiPG5FeNRCXpM9J8uptjs3eadM",
  authDomain: "netflixgpt-1753d.firebaseapp.com",
  projectId: "netflixgpt-1753d",
  storageBucket: "netflixgpt-1753d.firebasestorage.app",
  messagingSenderId: "479775335332",
  appId: "1:479775335332:web:eb8d89bf565b95b4769731",
  measurementId: "G-LWK08W44MC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
