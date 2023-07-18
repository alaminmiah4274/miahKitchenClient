import React, { useContext, useEffect, useState } from 'react';
import MenuItems from './MenuItems';
import { AuthContext } from '../Contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Menu = () => {

    const [services, setServices] = useState([]);
    const { loading, setLoading } = useContext(AuthContext);

    // to show title name 
    useTitle('Menu');

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:5000/services')
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