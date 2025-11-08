// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdxkABVGHiDWg46NcFu8JCrcisF4-o25k",
  authDomain: "skill-swap-firebase.firebaseapp.com",
  projectId: "skill-swap-firebase",
  storageBucket: "skill-swap-firebase.firebasestorage.app",
  messagingSenderId: "12568394815",
  appId: "1:12568394815:web:f4f19b3b1baa9c06f78c8a"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);