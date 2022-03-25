// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwbUinBQCu-hwA5YZvfxArkQNFw6IAas0",
  authDomain: "blogproject-557fe.firebaseapp.com",
  projectId: "blogproject-557fe",
  storageBucket: "blogproject-557fe.appspot.com",
  messagingSenderId: "901642869898",
  appId: "1:901642869898:web:a03b5bd2f594f29d612173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();