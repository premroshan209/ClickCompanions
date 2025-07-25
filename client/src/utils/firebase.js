// Importing functions from firebase
import { initializeApp } from "firebase/app";

<<<<<<< HEAD
// It configures and initializes Firebase services (Authentication, Firestore, Storage, etc.) for your app.
// Firebase requires this setup before you can use any of its features (like file uploads in your Profile component).
=======
>>>>>>> d3582c4aaa7a65508673adce5327cd4ea2c6e8ee
// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
<<<<<<< HEAD
  storageBucket: "datingapp-38832.firebasestorage.app",
=======
  storageBucket: "dest-3edee.appspot.com",
>>>>>>> d3582c4aaa7a65508673adce5327cd4ea2c6e8ee
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID, // For Firebase JS SDK v7.20.0 and later, measurementId is optional
};

// Initialize Firebase
<<<<<<< HEAD
export const app = initializeApp(firebaseConfig);
=======
export const app = initializeApp(firebaseConfig);
>>>>>>> d3582c4aaa7a65508673adce5327cd4ea2c6e8ee
