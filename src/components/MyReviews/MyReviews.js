import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import MyReviewsCard from "./MyReviewsCard";
import useTitle from "../../hooks/useTitle";
import Spinner from "../Spinner";

const MyReviews = () => {
	const { user } = useContext(AuthContext);

	// to store review data
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);

	// to show title name
	useTitle("My Reviews");

	// to get specific review data using email given by individual customer
	useEffect(() => {
		setLoading(true);
		fetch(
			`https://miah-kitchen-server.vercel.app/review?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"miah-token"
					)}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				setReviews(data);
				setLoading(false);
			});
	}, [user?.email, setLoading]);

	// to delete review from database
	const handleDeleteReview = (id) => {
		const agree = window.confirm("Do you want to delete review?");

		if (agree) {
			fetch(`https://miah-kitchen-server.vercel.app/review/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("Deleted successfully");
					}
				});
		}
	};

	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="overflow-x-auto min-h-screen my-10 px-5 md:px-10">
			{
				// to show individual review if the user gave any review
				reviews.length === 0 ? (
					<p className="text-5xl text-center py-28">
						No reviews were added
					</p>
				) : (
					<div>
						<table className="table table-zebra bg-gray-50">
							<thead>
								<tr>
									<th>ID</th>
									<th>Item Name</th>
									<th>Comment</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{reviews.map((review) => (
									<MyReviewsCard
										key={review._id}
										review={review}
										handleDeleteReview={handleDeleteReview}
									></MyReviewsCard>
								))}
							</tbody>
						</table>
					</div>
				)
			}
		</div>
	);
};

export default MyReviews;
