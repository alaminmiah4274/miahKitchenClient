import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='grid gap-10 grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;