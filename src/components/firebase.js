// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOWqWR196zKHPjQ8K2ClsKR_L-xfu1wfo",
  authDomain: "saitama-376611.firebaseapp.com",
  projectId: "saitama-376611",
  storageBucket: "saitama-376611.appspot.com",
  messagingSenderId: "9136118842",
  appId: "1:9136118842:web:2b4c83805360c2e6622903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}