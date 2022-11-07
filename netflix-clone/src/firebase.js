// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHuEXuhOffY-9J8TnGl0wT46Wq7ScoOyQ",
  authDomain: "netflix-clone-23a40.firebaseapp.com",
  projectId: "netflix-clone-23a40",
  storageBucket: "netflix-clone-23a40.appspot.com",
  messagingSenderId: "946447845200",
  appId: "1:946447845200:web:50962cd7fd16e400394e55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);