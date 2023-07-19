import React, { useContext } from 'react';
import { AuthContext } from '../components/Contexts/AuthProvider';

const FoodItemsCard = ({ item }) => {

    const { img, title, description, price } = item;
    const { user } = useContext(AuthContext);

    // to send order data to the database 
    const handleOrderButton = () => {

        const orderItem = {
            name: title,
            image: img,
            price,
            email: user.email
        };

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Order taken successfully');
                }
            })
    };

    return (
        <div className="card card-compact w-80 bg-white shadow-xl">

            <figure><img src={img} alt="" className='h-48 w-screen' /></figure>

            <div className="card-body">

                <h2 className="card-title">{title}</h2>
                <h4 className='text-lg font-semibold'>Price: {price} tk</h4>
                <p>{description}</p>

                <div onClick={handleOrderButton} className="card-actions justify-end">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default FoodItemsCard;