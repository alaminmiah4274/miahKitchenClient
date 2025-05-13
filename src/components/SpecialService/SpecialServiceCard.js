const SpecialServiceCard = ({ service }) => {
	const { img, title, description } = service;

	return (
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

export default SpecialServiceCard;
