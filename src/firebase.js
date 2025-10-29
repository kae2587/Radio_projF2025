// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCBDx0NAASFfiGq0ykDQf1zUU7EoDnorQ",
  authDomain: "isparch-47678.firebaseapp.com",
  projectId: "isparch-47678",
  storageBucket: "isparch-47678.firebasestorage.app",
  messagingSenderId: "229698347431",
  appId: "1:229698347431:web:2a911ef3b9f28fd97e5682",
  measurementId: "G-M4FBL5HTL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
