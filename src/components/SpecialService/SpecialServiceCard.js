import React from 'react';

const SpecialServiceCard = ({ service }) => {

    const { img, title, description } = service;

    return (
        <div className="card card-compact w-80 bg-white shadow-xl">
            <figure><img src={img} alt="" className='h-44 w-screen' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SpecialServiceCard;