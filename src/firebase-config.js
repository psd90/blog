import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_Snkqbew-pAmr14VzBMDhhFGjGCdrQto",
  authDomain: "blog-c65e4.firebaseapp.com",
  projectId: "blog-c65e4",
  storageBucket: "blog-c65e4.appspot.com",
  messagingSenderId: "691203721247",
  appId: "1:691203721247:web:4bd632e53ca66abb89ad2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();