// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e1ad0.firebaseapp.com",
  projectId: "mern-blog-e1ad0",
  storageBucket: "mern-blog-e1ad0.firebasestorage.app",
  messagingSenderId: "855985995827",
  appId: "1:855985995827:web:11b92de1d0b3c917dbe346"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);