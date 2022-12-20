// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdJLRLgBahyYL-7UKffXBuZczrYEk4cfo",
  authDomain: "pawster-capstone-5b890.firebaseapp.com",
  projectId: "pawster-capstone-5b890",
  storageBucket: "pawster-capstone-5b890.appspot.com",
  messagingSenderId: "537968764721",
  appId: "1:537968764721:web:e1ce96b591c902b7ddb210",
  measurementId: "G-V1BY7V6DC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);