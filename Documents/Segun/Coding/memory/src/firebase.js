import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyA8ddBhJ4ubatiujfojY1g8vNLlqwVdlsw",
  authDomain: "coleng-alumni.firebaseapp.com",
  projectId: "coleng-alumni",
  storageBucket: "coleng-alumni.appspot.com",
  messagingSenderId: "1093073858224",
  appId: "1:1093073858224:web:fa31dfb94a2bca1fa0d575"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



