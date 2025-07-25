// Importing functions from firebase
import { initializeApp } from "firebase/app";

// It configures and initializes Firebase services (Authentication, Firestore, Storage, etc.) for your app.
// Firebase requires this setup before you can use any of its features (like file uploads in your Profile component).
// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: "datingapp-38832.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID, // For Firebase JS SDK v7.20.0 and later, measurementId is optional
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
