// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPxgkF7YsiQlSXjQ457lretYdVkc5WTIM",
  authDomain: "authentication-1986b.firebaseapp.com",
  projectId: "authentication-1986b",
  storageBucket: "authentication-1986b.appspot.com",
  messagingSenderId: "819100723183",
  appId: "1:819100723183:web:70dc62bc24d6ecb12f781a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


