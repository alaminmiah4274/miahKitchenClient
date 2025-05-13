import React, { useEffect, useState, useContext } from "react";
import SpecialServiceCard from "./SpecialServiceCard";
import { AuthContext } from "../Contexts/AuthProvider";
import Spinner from "../Spinner";

const SpecialService = () => {
	const [services, setServices] = useState([]);
	const { loading, setLoading } = useContext(AuthContext);

	useEffect(() => {
		setLoading(true);
		fetch("https://miah-kitchen-server.vercel.app/cateringData")
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setLoading(false);
			});
	}, [setLoading]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="px-5 md:px-10 my-[60px] md:my-[100px]">
			<div className="text-center mb-10">
				<h1 className="text-3xl md:text-5xl font-semibold underline">
					Catering Service
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{services.map((service, id) => (
					<SpecialServiceCard
						key={id}
						service={service}
					></SpecialServiceCard>
				))}
			</div>
			<div className="text-center mt-5">
				<p className="text-lg font-semibold">
					To get our Catering Service contact us: 01314993347
				</p>
			</div>
		</div>
	);
};

export default SpecialService;
