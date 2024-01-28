// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBz8RcEkB7REeCwy6YFwU5aHRig_kZ5qtc",
  authDomain: "great-grace-22800.firebaseapp.com",
  projectId: "great-grace-22800",
  storageBucket: "great-grace-22800.appspot.com",
  messagingSenderId: "492483052662",
  appId: "1:492483052662:web:5e6e580f21e1b9c271cb57",
  measurementId: "G-V7Q3TPCBX9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const storage = getStorage(app)