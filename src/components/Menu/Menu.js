import React, { useEffect, useState } from 'react';
import MenuItems from './MenuItems';

const Menu = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='w-4/5 mx-auto py-10'>
            <div className='grid gap-10 grid-cols-3'>
                {
                    services.map(service => <MenuItems
                        key={service._id}
                        service={service}
                    ></MenuItems>)
                }
            </div>
        </div>
    );
};

export default Menu;