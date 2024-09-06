// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG51DEADdEaEwzPbL4Uzeacnd5rM3JjR8",
  authDomain: "devahs01.firebaseapp.com",
  projectId: "devahs01",
  storageBucket: "devahs01.appspot.com",
  messagingSenderId: "131340439142",
  appId: "1:131340439142:web:bf6662f83d454cf3b167a7",
  measurementId: "G-1VWR9CMT4L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
