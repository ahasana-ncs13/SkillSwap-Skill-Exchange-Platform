import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';


const AuthProvider = ({children}) => {
        const GoogleProvider = new GoogleAuthProvider()
        const [user , setUser]=useState([])


    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth,GoogleProvider)
    }

    const signInUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth , currentUser=> {
            setUser(currentUser)
        })

        return ()=> {
            unsubscribe()
        }

    },[])



    const authInfo={
        user,
        setUser,
        createUser,
        signInWithGoogle,
        signInUser,
        logOutUser,
    }

    
    return (
        <div>
            <AuthContext value={authInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;