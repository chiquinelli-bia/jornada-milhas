// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_gUfdkuhjlEBPyh6-DyEjcKsWcZq0lgc",
  authDomain: "jornada-milhas-a0dd6.firebaseapp.com",
  projectId: "jornada-milhas-a0dd6",
  storageBucket: "jornada-milhas-a0dd6.firebasestorage.app",
  messagingSenderId: "808887638818",
  appId: "1:808887638818:web:6af09f460f6058853ca37b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();
