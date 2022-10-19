// Import the functions you need from the SDKs you eed
import { initializeApp } from "firebase/app";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: "resumejob-64a42.appspot.com",
    messagingSenderId: "559328353798",
    appId: "1:559328353798:web:8a902785a8b09c66f62d87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app