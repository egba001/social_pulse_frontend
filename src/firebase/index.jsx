// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ucSVBvPrWzZDraJi7YAyFledBdwpjoU",
  authDomain: "socialpulse-3e8c1.firebaseapp.com",
  projectId: "socialpulse-3e8c1",
  storageBucket: "socialpulse-3e8c1.appspot.com",
  messagingSenderId: "426853799863",
  appId: "1:426853799863:web:01cfa1e25fb46ff18a3a32",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth
const auth = getAuth(app);
// db
const db = getFirestore(app);
// storage
const storage = getStorage();

export { app, auth, db, storage };
