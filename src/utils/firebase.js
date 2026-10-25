// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ehTPE3ppYIZN8Kpbnv4lxUeXShTu2oI",
  authDomain: "netflixgpt-43b21.firebaseapp.com",
  projectId: "netflixgpt-43b21",
  storageBucket: "netflixgpt-43b21.firebasestorage.app",
  messagingSenderId: "49797378966",
  appId: "1:49797378966:web:6996bdb0ef8ed29fe223b7",
  measurementId: "G-5WQVV4ZWE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();