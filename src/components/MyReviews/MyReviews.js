import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    const { user } = useContext(AuthContext);

    // to store review data
    const [reviews, setReviews] = useState([]);

    // to get review data using individual email
    useEffect(() => {

        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);



    return (
        <div className="overflow-x-auto py-10">
            {
                // to show individual review if the user gave any review 
                reviews.length === 0 ?
                    <p className='text-5xl text-center py-32'>No reviews were added</p>
                    :
                    <table className="table">
                        <tbody>
                            {
                                reviews.map(review => <MyReviewsCard
                                    key={review._id}
                                    review={review}
                                ></MyReviewsCard>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default MyReviews;