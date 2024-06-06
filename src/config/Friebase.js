import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBnMbNgrFbs-yCj8eck7QcpPUOAoF5RbpU",
  authDomain: "login-24df3.firebaseapp.com",
  projectId: "login-24df3",
  storageBucket: "login-24df3.appspot.com",
  messagingSenderId: "884614986144",
  appId: "1:884614986144:web:699f2ebf34b57e23da8cc5",
  measurementId: "G-NJM4XBLW6P",
};
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);
const functions = getFunctions(app);
export const storage = getStorage(app)

export { functions, httpsCallable };