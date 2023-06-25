import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodItemsCard from './FoodItemsCard';
import { AuthContext } from '../components/Contexts/AuthProvider';
import ReviewModal from '../components/CustomerReviews/ReviewModal/ReviewModal';
import AllReviews from '../components/CustomerReviews/AllReviews/AllReviews';

const FoodItems = () => {

    // to get context data 
    const { user } = useContext(AuthContext);

    // to get individual food item
    const itemsData = useLoaderData();
    const items = itemsData.otherItems;

    // to submit review modal data 
    const handleReviewSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const customerReview = form.reviewText.value;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const itemsName = itemsData.title;

        const review = {
            customerName: name,
            photoURL,
            email,
            customerReview,
            foodItem: itemsName
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
                <h1 className='text-3xl text-center font-semibold py-10'>Customer Reviews</h1>

                <div className='flex justify-between'>
                    <div>
                        <h1>Review these items</h1>
                        <p>Share your thoughts with other customers</p>

                        <button className='border rounded-full p-1 w-72'>

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
                        <AllReviews></AllReviews>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FoodItems;