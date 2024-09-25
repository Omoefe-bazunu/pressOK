import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDazXhyIC5UFzAUBE2twzTnBO9k9u7NqHM",
  authDomain: "pressok-89ee6rebaseapp.com",
  projectId: "pressok-89ee6",
  storageBucket: "pressok-89ee6.appspot.com",
  messagingSenderId: "58696650303",
  appId: "1:58696650303:web:c673119db6f28e1555328a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const dbase = getFirestore(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("LOGGED IN");
  } else {
    console.log("NO USER INFO - SIGNUP or LOGIN");
  }
});

export { dbase, storage, auth, app as default };
