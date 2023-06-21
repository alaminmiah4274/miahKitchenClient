import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

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

    const authInfo = {
        user,
        userCreate,
        userLogIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;