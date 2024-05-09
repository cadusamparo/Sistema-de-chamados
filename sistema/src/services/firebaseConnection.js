import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD1IzOmADK0ARmfEfRJUmNxUg_Jv3sI5TY",
    authDomain: "tickets-3551b.firebaseapp.com",
    projectId: "tickets-3551b",
    storageBucket: "tickets-3551b.appspot.com",
    messagingSenderId: "1065128358657",
    appId: "1:1065128358657:web:bdd9e45ec576532126a100",
    measurementId: "G-EL5LQF485M"
};

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export { auth, db, storage }