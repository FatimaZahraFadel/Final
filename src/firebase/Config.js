import  firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCy-p3HcfDHewh18EKgvJ6gFe-qijMATO4",
  authDomain: "final-f2711.firebaseapp.com",
  projectId: "final-f2711",
  storageBucket: "final-f2711.appspot.com",
  messagingSenderId: "803812759703",
  appId: "1:803812759703:web:8e7b4e93bb80b3b77e31d2",
  measurementId: "G-B5HQ6P9SXG"
};


firebase.initializeApp(firebaseConfig);
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };