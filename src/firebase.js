import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC52pkI3uldWDzEtSKx1oVaMMw-VZEXuKw",
  authDomain: "linkedin-clone-6520a.firebaseapp.com",
  projectId: "linkedin-clone-6520a",
  storageBucket: "linkedin-clone-6520a.appspot.com",
  messagingSenderId: "985834546482",
  appId: "1:985834546482:web:25bbbdbb7d6e25e534a32b",
  measurementId: "G-Q94L7N1EZ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
