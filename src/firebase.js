import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKhbW2t-72RLi-hVG43xcXSqBayvUjpgw",
  authDomain: "bookstore-64111.firebaseapp.com",
  // databaseURL: "bookstore-64111.firebaseio.com",
  projectId: "bookstore-64111",
  storageBucket: "bookstore-64111.appspot.com",
  messagingSenderId: "229779666227",
  appId: "1:229779666227:web:757b84be46a9a9522cfa46",
  measurementId: "G-TCCK26PBE7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
