import React from 'react';

const Reviews = ({ review }) => {

    const { customerReview, customerName, photoURL, foodItem } = review;

    return (
        <div className='mt-5'>
            <div className='flex items-center'>
                <img src={photoURL} alt="" className='rounded-full' width={40} />
                <p className='text-lg font-semibold ms-2'>{customerName}</p>
            </div>
            <div className='mt-2'>
                <p className='font-medium'>{foodItem}</p>
                <p>{customerReview}</p>
            </div>
        </div>
    );
};

export default Reviews;