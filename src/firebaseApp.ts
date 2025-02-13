// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseKey = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseKey.VITE_REACT_APP_API_KEY,
  authDomain: firebaseKey.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: firebaseKey.VITE_REACT_APP_PROJECT_ID,
  storageBucket: firebaseKey.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: firebaseKey.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: firebaseKey.VITE_REACT_APP_APP_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
