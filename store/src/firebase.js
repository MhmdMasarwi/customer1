// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0j5gs0hGC9mxEltBkFGQlOY_SuSMORfc",
  authDomain: "customer1-a5b7e.firebaseapp.com",
  projectId: "customer1-a5b7e",
  storageBucket: "customer1-a5b7e.appspot.com",
  messagingSenderId: "194400067680",
  appId: "1:194400067680:web:1ab2634167fc968eb9e305",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
