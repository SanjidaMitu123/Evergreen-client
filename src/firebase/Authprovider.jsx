/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";






export const AuthContext = createContext(null);

 const auth = getAuth(app); 


const AuthProvider = ({children}) => {

    const [user,setuser]= useState(null);
    const [loading,setloading] = useState(true);

    const createUser = (email ,password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

     const logout = () =>{
        setloading(true);
        return signOut(auth);
     }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged( auth,currentUser =>{
            console.log('user state changed', currentUser);
            setuser(currentUser);
            setloading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])

    const googleProvider = new GoogleAuthProvider();
     const googleSingIn = (value) => {
          return signInWithPopup(auth,googleProvider);
     };
    const authInfo = {
        user,
        loading,
        googleSingIn,
       
        createUser,
        signIn,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;