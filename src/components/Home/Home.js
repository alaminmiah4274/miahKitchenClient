import React from "react";
import Banner from "./Banner/Banner";
import Service from "../Service/Service";
import SpecialService from "../SpecialService/SpecialService";
import About from "../About/About";
import useTitle from "../../hooks/useTitle";

const Home = () => {
	// to show title name
	useTitle("Home");

	return (
		<div>
			<Banner></Banner>
			<Service></Service>
			<About />
			<SpecialService></SpecialService>
		</div>
	);
};

export default Home;
