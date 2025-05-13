import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

const ReviewModal = ({ handleReviewSubmit, itemsData }) => {
	// used to get context data
	const { user } = useContext(AuthContext);

	return (
		<dialog id="myReviewModal" className="modal">
			<form
				onSubmit={handleReviewSubmit}
				method="dialog"
				className="modal-box bg-white"
			>
				<p
					onClick={() => window.myReviewModal.close()}
					className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
				>
					✕
				</p>
				<h3 className="font-bold text-lg">{itemsData.title}</h3>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-3">
					<input
						type="text"
						name="firstName"
						placeholder="First name"
						className="input input-bordered w-full"
						required
					/>
					<input
						type="text"
						name="lastName"
						placeholder="Last name"
						className="input input-bordered w-full"
						required
					/>
					<input
						type="url"
						name="photoURL"
						placeholder="Your photo url"
						className="input input-bordered w-full"
						defaultValue={user?.photoURL}
						readOnly
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email"
						className="input input-bordered w-full"
						defaultValue={user?.email}
						readOnly
					/>
				</div>

				<textarea
					className="textarea textarea-bordered h-24 w-full"
					name="reviewText"
					placeholder="write your review here..."
					required
				></textarea>
				<input
					className="btn btn-primary"
					type="submit"
					value="Submit"
				/>
			</form>
		</dialog>
	);
};

export default ReviewModal;
