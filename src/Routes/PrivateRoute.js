import React, { useContext } from "react";
import { AuthContext } from "../components/Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading && user === null) return <Spinner />;

	return user ? (
		children
	) : (
		<Navigate to="/login" state={{ from: location }} replace></Navigate>
	);
};

export default PrivateRoute;
