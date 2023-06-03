// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuSFbQZUfLGumMZdK-FWjtRwfPv6LHBrI",
  authDomain: "emirate-gym.firebaseapp.com",
  projectId: "emirate-gym",
  storageBucket: "emirate-gym.appspot.com",
  messagingSenderId: "546798733314",
  appId: "1:546798733314:web:428e05005705cd74acff1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebaseStorage = getStorage(app);