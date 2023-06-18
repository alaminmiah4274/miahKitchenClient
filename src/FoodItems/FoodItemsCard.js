import React from 'react';

const FoodItemsCard = ({ item }) => {

    const { img, title, description, price } = item;

    return (
        <div className="card card-compact w-80 bg-white shadow-xl">
            <figure><img src={img} alt="" className='h-48 w-screen' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h4 className='text-lg font-semibold'>Price: {price} tk</h4>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItemsCard;