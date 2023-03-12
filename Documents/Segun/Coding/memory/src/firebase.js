import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyA8ddBhJ4ubatiujfojY1g8vNLlqwVdlsw",
  authDomain: "coleng-alumni.firebaseapp.com",
  projectId: "coleng-alumni",
  storageBucket: "coleng-alumni.appspot.com",
  messagingSenderId: "1093073858224",
  appId: "1:1093073858224:web:fa31dfb94a2bca1fa0d575"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)



