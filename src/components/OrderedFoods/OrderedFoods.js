import React, { useEffect, useState } from 'react';
import OrderedFoodsCard from './OrderedFoodsCard';

const OrderedFoods = () => {

    const [orders, setOrders] = useState([]);

    // to load orders data from the database 
    useEffect(() => {

        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);

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