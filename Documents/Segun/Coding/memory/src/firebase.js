import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


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

const provider = new GoogleAuthProvider()

export const signInWIthGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoUrl

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)

    }).catch((error) => {
        console.log(error)
    })
}