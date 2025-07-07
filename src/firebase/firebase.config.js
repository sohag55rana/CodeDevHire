// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIYorK7Iv6uYPWWgOFEZ4JO6_Fd0nz5P4",
  authDomain: "codedevhire.firebaseapp.com",
  projectId: "codedevhire",
  storageBucket: "codedevhire.firebasestorage.app",
  messagingSenderId: "509928748632",
  appId: "1:509928748632:web:de355c98889af23d017c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);