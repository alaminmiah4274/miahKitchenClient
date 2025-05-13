import { useEffect, useState, useContext } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import Spinner from "../Spinner";

const Service = () => {
	const [services, setServices] = useState([]);
	const { loading, setLoading } = useContext(AuthContext);

	useEffect(() => {
		setLoading(true);
		fetch("https://miah-kitchen-server.vercel.app/service")
			.then((res) => res.json())
			.then((data) => setServices(data))
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="px-5 md:px-10 my-[100px]">
			<div className="mb-10">
				<h1 className="text-center text-3xl md:text-5xl font-semibold underline">
					Our Meal List
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{services.map((service) => (
					<ServiceCard
						key={service._id}
						service={service}
					></ServiceCard>
				))}
			</div>
			<div className="text-center mt-10">
				<Link to="/menu">
					<button className="btn btn-primary">See All</button>
				</Link>
			</div>
		</div>
	);
};

export default Service;
