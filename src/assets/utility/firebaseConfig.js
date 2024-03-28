import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn6FMCyFe4lpLPuzSOhWQbOI2XyxuxBqo",
  authDomain: "mobiapp-2494e.firebaseapp.com",
  projectId: "mobiapp-2494e",
  storageBucket: "mobiapp-2494e.appspot.com",
  messagingSenderId: "126819777973",
  appId: "1:126819777973:web:e80baf1bd8c266933aedfc",
  measurementId: "G-FWJJZPZJML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app)
export const db = getFirestore(app);