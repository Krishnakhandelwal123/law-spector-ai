import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAs3ToTmetzdxccu5uetYw0c5XtxC0umlA",
    authDomain: "law-spector-ai.firebaseapp.com",
    projectId: "law-spector-ai",
    storageBucket: "law-spector-ai.firebasestorage.app",
    messagingSenderId: "978451744758",
    appId: "1:978451744758:web:a0157b2d20ea007dbde9d7",
    measurementId: "G-YNMWR8EK2Z"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };