// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Fixed storageBucket
const firebaseConfig = {
  apiKey: "AIzaSyBqp2z4XyvpN8_yGq6XHBrmtrcgkLyPvrg",
  authDomain: "blogapp-8e7f0.firebaseapp.com",
  projectId: "blogapp-8e7f0",
  storageBucket: "blogapp-8e7f0.appspot.com", // ✅ Fixed here
  messagingSenderId: "412736267987",
  appId: "1:412736267987:web:480023ed46d5a6edc19626"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
