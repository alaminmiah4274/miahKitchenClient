import { useContext, useEffect, useState } from "react";
import OrderedFoodsCard from "./OrderedFoodsCard";
import { AuthContext } from "../Contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Spinner from "../Spinner";

const OrderedFoods = () => {
	const { user } = useContext(AuthContext);
	const [orders, setOrders] = useState([]);
	const [loading, setLoading] = useState(false);

	// to show title name
	useTitle("Ordered Foods");

	// to load orders data from the database
	useEffect(() => {
		setLoading(true);

		fetch(
			`https://miah-kitchen-server.vercel.app/orders?email=${user?.email}`,
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"miah-token"
					)}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => setOrders(data))
			.finally(() => setLoading(false));
	}, [user?.email, setLoading]);

	// to show spinner
	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="overflow-x-auto min-h-screen my-10 px-5 md:px-10">
			<table className="table table-zebra bg-gray-50">
				<thead>
					<tr>
						<th>Action</th>
						<th>Item Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => (
						<OrderedFoodsCard
							key={order._id}
							order={order}
						></OrderedFoodsCard>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default OrderedFoods;
