import React, { useContext, useEffect, useState } from 'react';
import OrderedFoodsCard from './OrderedFoodsCard';
import { AuthContext } from '../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const OrderedFoods = () => {

    const { user, loading, setLoading } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // to show title name 
    useTitle('Ordered Foods');

    // to load orders data from the database 
    useEffect(() => {

        setLoading(true);

        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('miah-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })

    }, [user?.email, setLoading]);

    // to show spinner 
    if (loading) {
        return <div className='text-center py-44'><span className="loading loading-spinner text-primary loading-lg"></span></div>;
    };

    return (
        <div className="overflow-x-auto py-10">
            <table className="table">
                <tbody>
                    {
                        orders.map(order => <OrderedFoodsCard
                            key={order._id}
                            order={order}
                        ></OrderedFoodsCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default OrderedFoods;