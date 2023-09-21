import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1YUZnZymAJaGCxfwFe2B-VZJHdvlvoxA",
  authDomain: "cine-sphere.firebaseapp.com",
  projectId: "cine-sphere",
  storageBucket: "cine-sphere.appspot.com",
  messagingSenderId: "136675606210",
  appId: "1:136675606210:web:76af2b2fe0c8179152855b",
  measurementId: "G-X03TDHZ0Z7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);