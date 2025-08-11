import React from 'react';
import Banner from '../banner/Banner';
import Process from '../process/Process';
import Aboutus from '../aboutUs/Aboutus';
import Services from '../services/Services';

const MyHome = () => {
    return (
        <div>
            <Banner />
            <Aboutus />
            <Services />
            <Process />
        </div>
    );
};

export default MyHome;