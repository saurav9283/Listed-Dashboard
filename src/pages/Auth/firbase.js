
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMQ9tM1sqAHLomeLlrGFtuJrvWwbmRRaE",
  authDomain: "dash-12c44.firebaseapp.com",
  projectId: "dash-12c44",
  storageBucket: "dash-12c44.appspot.com",
  messagingSenderId: "24307883742",
  appId: "1:24307883742:web:238256454c1c9f4999ac4f",
  measurementId: "G-0FSLKNGTQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};