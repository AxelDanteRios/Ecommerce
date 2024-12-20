// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBveN-Xwp68rAsKVoISb_Oesei04-MgC5U",
  authDomain: "retro-replay-e2d18.firebaseapp.com",
  projectId: "retro-replay-e2d18",
  storageBucket: "retro-replay-e2d18.firebasestorage.app",
  messagingSenderId: "780507225601",
  appId: "1:780507225601:web:541e72754db6dde02e2a00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)