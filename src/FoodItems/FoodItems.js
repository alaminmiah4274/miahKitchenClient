import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodItemsCard from './FoodItemsCard';
import { AuthContext } from '../components/Contexts/AuthProvider';
import ReviewModal from '../components/CustomerReviews/ReviewModal/ReviewModal';
import Reviews from '../components/CustomerReviews/AllReviews/Reviews';

const FoodItems = () => {

    // reviews state
    const [reviews, setReviews] = useState([]);

    // to get context data 
    const { user } = useContext(AuthContext);

    // to get individual food item
    const itemsData = useLoaderData();
    const items = itemsData.otherItems;

    // to show all reviews 
    useEffect(() => {

        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, []);

    // to submit review modal data 
    const handleReviewSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const customerReview = form.reviewText.value;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const itemsName = itemsData.title;
        const itemsId = itemsData._id;

        const review = {
            customerName: name,
            photoURL,
            email,
            customerReview,
            foodItem: itemsName,
            foodItemId: itemsId
        };

        // to send review data to the database
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Your review added successfully');
                    form.reset();
                }
            })

    };

    return (
        <div className='w-4/5 mx-auto py-10'>

            {/* all service items section */}
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    items.map((item, id) => <FoodItemsCard
                        key={id}
                        item={item}
                    ></FoodItemsCard>)
                }

            </div>

            {/* horizontal line */}
            <hr className='border-black mt-12' />

            {/* customer rewiew section */}
            <div>
                <h1 className='text-5xl text-center font-bold py-10'>Customer Reviews</h1>

                <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Review these items</h1>
                        <p>Share your thoughts with other customers</p>

                        <button className='border border-black rounded-full p-1 w-72 mt-5'>

                            {user?.uid ?
                                <p onClick={() => window.myReviewModal.showModal()}>Write a customer review</p> :
                                <Link to='/login'>To write review please Login first</Link>
                            }

                            {/* review modal component */}
                            <ReviewModal
                                handleReviewSubmit={handleReviewSubmit}
                                itemsData={itemsData}
                            ></ReviewModal>

                        </button>

                    </div>

                    <div>
                        {
                            reviews.map(review => <Reviews
                                key={review._id}
                                review={review}
                            ></Reviews>)
                        }
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FoodItems;