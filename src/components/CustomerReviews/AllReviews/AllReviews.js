import React, { useEffect, useState } from 'react';
import Reviews from './Reviews';

const AllReviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div>
            {
                reviews.map(review => <Reviews
                    key={review._id}
                    review={review}
                ></Reviews>)
            }
        </div>
    );
};

export default AllReviews;