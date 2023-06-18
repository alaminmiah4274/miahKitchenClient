import React from 'react';

const ServiceCard = ({ service }) => {

    const { title, img, description } = service;

    return (
        <div className="card card-compact w-80 bg-white shadow-xl">
            <figure><img src={img} alt="" className='h-52 w-screen' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100)}</p>
            </div>
        </div>
    );
};

export default ServiceCard;