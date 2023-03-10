// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC2uIaD9OBUKRWGokuAqzokQGS0puki0So",

  authDomain: "spotter-2be92.firebaseapp.com",

  databaseURL:
    "https://spotter-2be92-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "spotter-2be92",

  storageBucket: "spotter-2be92.appspot.com",

  messagingSenderId: "817601310497",

  appId: "1:817601310497:web:50c567b786aa3b368e1860",

  measurementId: "G-QMZ71FRJS6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const database = getDatabase(app);

export { database };
