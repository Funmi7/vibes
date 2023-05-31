// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAic0PX5G0PBKDS0H-n0HR-el4JZXJ5L9M",
  authDomain: "vibes-c8b0f.firebaseapp.com",
  projectId: "vibes-c8b0f",
  storageBucket: "vibes-c8b0f.appspot.com",
  messagingSenderId: "1066787117007",
  appId: "1:1066787117007:web:17e06095b1f23adeac64ba",
  measurementId: "G-PPHZE630MC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
