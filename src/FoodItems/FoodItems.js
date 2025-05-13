import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FoodItemsCard from "./FoodItemsCard";
import { AuthContext } from "../components/Contexts/AuthProvider";
import ReviewModal from "../components/CustomerReviews/ReviewModal/ReviewModal";
import Reviews from "../components/CustomerReviews/AllReviews/Reviews";
import Spinner from "../components/Spinner";

const FoodItems = () => {
	// reviews state
	const [reviews, setReviews] = useState([]);
	const { id } = useParams();
	const [items, setItems] = useState({});
	const [itemsLoading, setItemsLoading] = useState(false);
	const [reviewsLoading, setResviewsLoading] = useState(false);
	// to get context data
	const { user } = useContext(AuthContext);

	// to get individual food item
	// const itemsData = useLoaderData();
	// const items = itemsData?.otherItems || [];

	// fetching menu services data
	useEffect(() => {
		setItemsLoading(true);
		fetch(`https://miah-kitchen-server.vercel.app/services/${id}`)
			.then((res) => res.json())
			.then((data) => setItems(data))
			.finally(() => setItemsLoading(false));
	}, [id]);

	// to show all reviews
	useEffect(() => {
		setResviewsLoading(true);
		fetch("https://miah-kitchen-server.vercel.app/reviews")
			.then((res) => res.json())
			.then((data) => setReviews(data))
			.finally(() => setResviewsLoading(false));
	}, []);

	// to prevent the null error before loading items value
	const foodItems = items?.otherItems ? items.otherItems : [];

	// to submit review modal data
	const handleReviewSubmit = (e) => {
		e.preventDefault();

		const form = e.target;
		const customerReview = form.reviewText.value;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const itemsName = items.title;
		const itemsId = items._id;

		const review = {
			customerName: name,
			photoURL,
			email,
			customerReview,
			foodItem: itemsName,
			foodItemId: itemsId,
		};

		// to send review data to the database
		fetch("https://miah-kitchen-server.vercel.app/reviews", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(review),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.acknowledged) {
					alert("Your review added successfully");
					form.reset();
				}
			});
	};

	if (itemsLoading || reviewsLoading) return <Spinner />;

	return (
		<div className="my-[100px] px-5 md:px-10">
			{/* all service items section */}
			<div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{foodItems.map((item, id) => (
					<FoodItemsCard key={id} item={item}></FoodItemsCard>
				))}
			</div>

			{/* horizontal line */}
			<hr className="border-black mt-12" />

			{/* customer rewiew section */}
			<div>
				<h1 className="text-4xl md:text-5xl text-center font-bold py-10">
					Customer Reviews
				</h1>

				<div className="flex flex-col lg:flex-row gap-5">
					<div>
						<h1 className="text-2xl font-semibold">
							Review these items
						</h1>
						<p>Share your thoughts with other customers</p>

						<button className="border border-black rounded-full p-1 w-72 mt-5">
							{user?.uid ? (
								<p
									onClick={() =>
										window.myReviewModal.showModal()
									}
								>
									Write a customer review
								</p>
							) : (
								<Link to="/login">
									To write review please Login first
								</Link>
							)}

							{/* review modal component */}
							<ReviewModal
								handleReviewSubmit={handleReviewSubmit}
								itemsData={items}
							></ReviewModal>
						</button>
					</div>

					<div>
						{reviews.map((review) => (
							<Reviews key={review._id} review={review}></Reviews>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodItems;
