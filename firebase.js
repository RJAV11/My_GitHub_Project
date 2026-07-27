// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Authentication
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firestore Database
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDBruT2awH_-CJTWH0XyRBFZMYEhNZ-rxw",
  authDomain: "my-github-project-ba82d.firebaseapp.com",
  projectId: "my-github-project-ba82d",
  storageBucket: "my-github-project-ba82d.firebasestorage.app",
  messagingSenderId: "16090563505",
  appId: "1:16090563505:web:7e3446138cafbf041bb390",
  measurementId: "G-C0MXE1DQ75"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const db = getFirestore(app);


export const provider = new GoogleAuthProvider();


export async function loginWithGoogle(){

    const result = await signInWithPopup(
        auth,
        provider
    );

    return result.user;

}
