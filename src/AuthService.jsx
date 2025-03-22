import { auth, googleProvider } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// Register user with email and password
export const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Registration Error:", error.message);
  }
};

// Login with email and password
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Login Error:", error.message);
  }
};

// Login with Google
export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Google Login Error:", error.message);
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};
