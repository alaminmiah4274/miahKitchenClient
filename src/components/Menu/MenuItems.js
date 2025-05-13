import { Link } from "react-router-dom";

const MenuItems = ({ service }) => {
	const { _id, title, img, description } = service;

	return (
		<div className="card card-compact bg-white shadow-xl">
			<figure>
				<img src={img} alt="" className="h-52 w-screen" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<p className="text-xs md:text-sm">{description}</p>
				<div className="card-actions justify-end">
					<Link to={`/food/${_id}`}>
						<button className="btn btn-primary text-xs md:text-sm">
							See Items
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MenuItems;
