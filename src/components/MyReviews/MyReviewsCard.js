import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";

const MyReviewsCard = ({ review, handleDeleteReview }) => {
	// props getting from MyReviews component
	const { _id, customerReview, foodItem, foodItemId } = review;

	// declared to show food items image
	const [foodItemOrder, setFoodItemOrder] = useState({});
	const [loading, setLoading] = useState(false);

	// to load food items data for showing image
	useEffect(() => {
		setLoading(true);
		fetch(`https://miah-kitchen-server.vercel.app/services/${foodItemId}`)
			.then((res) => res.json())
			.then((data) => setFoodItemOrder(data))
			.finally(() => setLoading(false));
	}, [foodItemId]);

	if (loading) return <Spinner />;

	return (
		<tr className="bg-white hover:bg-gray-100">
			<th>
				<label onClick={() => handleDeleteReview(_id)}>
					<p className="btn btn-ghost btn-xs">X</p>
				</label>
			</th>

			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							{foodItemOrder?.img && (
								<img src={foodItemOrder?.img} alt="" />
							)}
						</div>
					</div>

					<div>
						<div className="font-bold">{foodItem}</div>
					</div>
				</div>
			</td>

			<td>{customerReview}</td>

			<th>
				<button className="btn btn-ghost btn-xs">edit</button>
			</th>
		</tr>
	);
};

export default MyReviewsCard;
