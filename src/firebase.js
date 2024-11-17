// import firebase from "./firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiXb63gCrCTGX0V8TdHieKAmjYiYQw2Vs",
    authDomain: "clone-aaf7e.firebaseapp.com",
    projectId: "clone-aaf7e",
    storageBucket: "clone-aaf7e.firebasestorage.app",
    messagingSenderId: "969055075650",
    appId: "1:969055075650:web:03a523042de81495861cdb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth};
