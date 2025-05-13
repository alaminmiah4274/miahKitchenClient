const OrderedFoodsCard = ({ order }) => {
	const { image, price, name } = order;

	return (
		<tr className="hover:bg-gray-100">
			<th>
				<label>
					<p className="btn btn-ghost btn-xs">X</p>
				</label>
			</th>

			<td>
				<div className="flex items-center space-x-3">
					<div className="avatar">
						<div className="mask mask-squircle w-12 h-12">
							<img src={image} alt="" />
						</div>
					</div>
					<div>
						<div className="font-bold">{name}</div>
					</div>
				</div>
			</td>

			<td>{price} TK</td>
		</tr>
	);
};

export default OrderedFoodsCard;
