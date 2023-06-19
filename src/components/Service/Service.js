import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='mb-10'>
                <h1 className='text-center text-5xl underline'>Our Meal List</h1>
            </div>
            <div className='grid gap-10 grid-cols-3'>
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