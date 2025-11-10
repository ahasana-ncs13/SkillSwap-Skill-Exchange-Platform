import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import { auth } from '../../Firebase/Firebase.init';


const AuthProvider = ({children}) => {
        const GoogleProvider = new GoogleAuthProvider()
        const [user , setUser]=useState([])
        const [loading , setLoading]=useState(true)


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

    const updateUserProfile = (userProfile)=>{
        return updateProfile(auth.currentUser, userProfile)
    }

    const resetPassword =(email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth , currentUser=> {
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> {
            unsubscribe()
        }

    },[])

    

    const authInfo={
        user,
        loading,
        setUser,
        createUser,
        signInWithGoogle,
        signInUser,
        logOutUser,
        updateUserProfile,
        resetPassword
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