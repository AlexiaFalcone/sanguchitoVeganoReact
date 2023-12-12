import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeVqZCp3PqDWrPTun_8WPkxWeEgwAR9a0",
  authDomain: "sanguchito-vegano.firebaseapp.com",
  projectId: "sanguchito-vegano",
  storageBucket: "sanguchito-vegano.appspot.com",
  messagingSenderId: "474759543348",
  appId: "1:474759543348:web:9d0cd9648a8a2a5ce3e861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
