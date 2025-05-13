import React from "react";

const ServiceCard = ({ service }) => {
	const { title, img, description } = service;

	return (
		// <div className="card card-compact h-[400px] bg-white shadow-xl">
		// 	<figure>
		// 		<img src={img} alt="" className="h-52 w-screen" />
		// 	</figure>
		// 	<div className="card-body">
		// 		<h2 className="card-title">{title}</h2>
		// 		<p>{description.slice(0, 100)}</p>
		// 	</div>
		// </div>

		<div className="card bg-white shadow-sm">
			<figure>
				<img
					src={img}
					alt="image"
					className="h-[150px] md:h-[250px] w-full"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="text-xs md:text-sm">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
