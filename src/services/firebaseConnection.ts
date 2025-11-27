import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCsFF5-Dlal4qorXQ1s0N2uBtfGKOzgaZM",
  authDomain: "react-links-9a267.firebaseapp.com",
  projectId: "react-links-9a267",
  storageBucket: "react-links-9a267.firebasestorage.app",
  messagingSenderId: "628408960052",
  appId: "1:628408960052:web:37dd06a337bfdc3bd2f661"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };