import React, { useContext, useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Spinner from "../Spinner";

const Menu = () => {
	const [services, setServices] = useState([]);
	const { loading, setLoading } = useContext(AuthContext);

	// to show title name
	useTitle("Menu");

	useEffect(() => {
		setLoading(true);
		fetch("https://miah-kitchen-server.vercel.app/services")
			.then((res) => res.json())
			.then((data) => setServices(data))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="my-[50px] md:my-[100px] px-5 md:px-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{services.map((service) => (
					<MenuItems key={service._id} service={service}></MenuItems>
				))}
			</div>
		</div>
	);
};

export default Menu;
