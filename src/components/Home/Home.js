import React from 'react';
import Banner from './Banner/Banner';
import Service from '../Service/Service';
import About from '../About/About';
import SpecialService from '../SpecialService/SpecialService';
import useTitle from '../../hooks/useTitle';

const Home = () => {

    // to show title name 
    useTitle('Home');

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