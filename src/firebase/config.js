// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMPN1RDOggu6S4qR0eIGyJJ_UmXVFzAvM",
  authDomain: "mid-project-gallery.firebaseapp.com",
  projectId: "mid-project-gallery",
  storageBucket: "mid-project-gallery.appspot.com",
  messagingSenderId: "25616657439",
  appId: "1:25616657439:web:5624f3f95d2aaf9799392a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
