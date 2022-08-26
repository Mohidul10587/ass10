// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdmH6eO3NsroPwKTNNBubEG5hdNhSiIxM",
  authDomain: "assg10-64cf2.firebaseapp.com",
  projectId: "assg10-64cf2",
  storageBucket: "assg10-64cf2.appspot.com",
  messagingSenderId: "659824834110",
  appId: "1:659824834110:web:e45b02886aafa714ecc36f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)