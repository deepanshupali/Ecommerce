// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYFMkfaHOTBvedkB4Choqvm9-gr5iWJWY",
  authDomain: "ecommerce-be14f.firebaseapp.com",
  projectId: "ecommerce-be14f",
  storageBucket: "ecommerce-be14f.appspot.com",
  messagingSenderId: "960802666062",
  appId: "1:960802666062:web:536b933436a435903cf51f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
