import React from 'react';
import Banner from '../banner/Banner';
import Process from '../process/Process';
import Aboutus from '../aboutUs/Aboutus';
import Services from '../services/Services';
import Contact from '../contactUs/Contact';
import Reviews from '../reviews/Reviews';
import Faq from '../faq/Faq';
import Workon from '../workOn/Workon';
import Apart from '../apart/Apart';
import BelovedCompany from '../belovedCompany/BelovedCompany';
import WhyChoose from '../whyChoose/WhyChoose';

const MyHome = () => {
    return (
        <div>
            <Banner />
            <Aboutus />
            <Services />
            <Process />
            <WhyChoose />
            <BelovedCompany />
            <Apart />
            <Workon />
            <Faq />
            <Reviews />
            <Contact />
        </div>
    );
};

export default MyHome;