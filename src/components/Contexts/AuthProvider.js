import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // current user will get to use this state 
    const [user, setUser] = useState('');

    // google provider to get popup interface
    const googleProvider = new GoogleAuthProvider();

    // to create user
    const userCreate = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // to get loged in user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
        });
        return () => {
            return unSubscribe();
        };
    }, []);

    // to sign in user
    const userLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // to sign in using google
    const google = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // auth value
    const authInfo = {
        user,
        userCreate,
        userLogIn,
        google,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;