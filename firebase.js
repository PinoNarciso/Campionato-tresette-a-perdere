// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeZiPDG89tRz3QeFBhh3wWLkGtjoFGiXA",
  authDomain: "campinato-tresette-a-perdere.firebaseapp.com",
  databaseURL: "https://campinato-tresette-a-perdere-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "campinato-tresette-a-perdere",
  storageBucket: "campinato-tresette-a-perdere.firebasestorage.app",
  messagingSenderId: "105475040052",
  appId: "1:105475040052:web:631c46b7d47cd8b333bb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);