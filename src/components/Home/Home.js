import React from 'react';
import Banner from './Banner/Banner';
import Service from '../Service/Service';
import About from '../About/About';
import SpecialService from '../SpecialService/SpecialService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <SpecialService></SpecialService>
        </div>
    );
};

export default Home;