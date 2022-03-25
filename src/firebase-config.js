// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGSas4DkqVFok8JZEgqj9-1XEEA8Dj_cs",
  authDomain: "blog-547e5.firebaseapp.com",
  projectId: "blog-547e5",
  storageBucket: "blog-547e5.appspot.com",
  messagingSenderId: "681064924282",
  appId: "1:681064924282:web:a7f1bcd7e7f05bf8fd67c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();