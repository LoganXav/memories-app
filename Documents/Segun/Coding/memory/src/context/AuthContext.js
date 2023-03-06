import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase"

export const AuthContext = createContext();


export const AuthContextProvider = ({ children }) => { 
    
    const [user, setUser] = useState({})
    
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({
        prompt: 'select_account',
        auth_type: 'rerequest',
        persistence: 'none'
      });
        const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {                    
            // add redirects
        })   
        
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log('User', currentUser)
        })
        return () => {
            unsuscribe ()
        }
    }, [])
    return (
        <AuthContext.Provider value={{ signInWithGoogle, logOut, user }}>
            {children}
        </AuthContext.Provider>    
  );
};

export const UserAuth = () => {
    return useContext(AuthContext)
}


