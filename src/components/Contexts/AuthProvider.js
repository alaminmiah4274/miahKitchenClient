import React, { createContext, useEffect, useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	// current user will get to use this state
	const [user, setUser] = useState(null);
	// to get all error occured in different pages
	const [error, setError] = useState("");
	// to show spinner
	const [loading, setLoading] = useState(false);

	// to create user
	const userCreate = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// to get loged in user
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});
		return () => {
			unSubscribe();
		};
	}, []);

	// to sign in user
	const userLogIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};

	// to sign in using google
	const providerLogin = (provider) => {
		return signInWithPopup(auth, provider);
	};

	// user profile update
	const userProfileUpdate = (profile) => {
		return updateProfile(auth.currentUser, profile);
	};

	// to log out user
	const logOut = () => {
		return signOut(auth);
	};

	// auth value
	const authInfo = {
		user,
		error,
		loading,
		setLoading,
		setError,
		userCreate,
		userLogIn,
		providerLogin,
		userProfileUpdate,
		logOut,
	};

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
