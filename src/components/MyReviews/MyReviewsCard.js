import React, { useEffect, useState } from 'react';

const MyReviewsCard = ({ review }) => {

    const { _id, customerReview, foodItem, foodItemId } = review;
    const [foodItemOrder, setFoodItemOrder] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/services/${foodItemId}`)
            .then(res => res.json())
            .then(data => setFoodItemOrder(data))
    }, [foodItemId]);

    const handleDeleteReview = id => {

        console.log(id);
    };

    return (
        <tr>
            <th>
                <label onClick={() => handleDeleteReview(_id)}>
                    <p className='btn btn-ghost btn-xs'>X</p>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {foodItemOrder?.img &&
                                <img src={foodItemOrder?.img} alt="" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{foodItem}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerReview}
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">edit</button>
            </th>
        </tr>
    );
};

export default MyReviewsCard;