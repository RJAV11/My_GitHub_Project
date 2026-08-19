// firebase.js
// Connects this app to your Firebase project (Auth + Firestore).
// Keep this file next to index.html.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Your project's config (safe to expose in client code — security is
// enforced by Firestore rules + Firebase Auth, not by hiding this).
const firebaseConfig = {
  apiKey: "AIzaSyD5RKdPrsGb0tzw71pQ6Z6Mk06ZhuzwWvM",
  authDomain: "my-github-project-22a3c.firebaseapp.com",
  projectId: "my-github-project-22a3c",
  storageBucket: "my-github-project-22a3c.firebasestorage.app",
  messagingSenderId: "485331514112",
  appId: "1:485331514112:web:d35dda82cb162e433eb9e5",
  measurementId: "G-BMEJK41HWG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export function loginWithGoogle() {
  return signInWithPopup(auth, provider);
}

export function logout() {
  return signOut(auth);
}

export { onAuthStateChanged };
