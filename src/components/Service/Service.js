import React, { useEffect, useState, useContext } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const Service = () => {

    const [services, setServices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext)

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setLoading(false);
            })
    }, [setLoading]);

    if (loading) {
        return <div className='text-center py-44'><span className="loading loading-spinner text-primary loading-lg"></span></div>;
    };

    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='mb-10'>
                <h1 className='text-center text-5xl font-semibold underline'>Our Meal List</h1>
            </div>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center mt-10'>
                <Link to='/menu'><button className="btn btn-primary">See All</button></Link>
            </div>
        </div>
    );
};

export default Service;