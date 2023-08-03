import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyABjG0k6Exkwy1F32IeXknnSBIaBRFduaU",
  authDomain: "realm-js.firebaseapp.com",
  projectId: "realm-js",
  storageBucket: "realm-js.appspot.com",
  messagingSenderId: "145452070592",
  appId: "1:145452070592:web:f48b3974272b848c511f25",
  measurementId: "G-DX4F0L0X0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);