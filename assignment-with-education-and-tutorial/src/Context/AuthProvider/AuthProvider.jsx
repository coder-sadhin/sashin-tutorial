import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const updateCurrentUserProfile = profile => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile);
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const githubLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const userSignOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user state', currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])


    const userInfo = {
        user,
        createUser,
        updateCurrentUserProfile,
        userLogin,
        googleLogin,
        githubLogin,
        userSignOut,
        loading,
        verifyEmail,
        resetPassword
    };
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;