import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    const { user } = useContext(AuthContext);

    // to store review data
    const [reviews, setReviews] = useState([]);

    // to get specific review data using email given by individual customer 
    useEffect(() => {

        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email]);

    // to delete review from database
    const handleDeleteReview = id => {

        const agree = window.confirm('Do you want to delete review?');

        if (agree) {

            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                    }
                });
        }
    };

    return (
        <div className="overflow-x-auto py-28">
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
                                    handleDeleteReview={handleDeleteReview}
                                ></MyReviewsCard>)
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default MyReviews;