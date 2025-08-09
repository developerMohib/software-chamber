import React from 'react';
import Banner from '../banner/Banner';

const MyHome = () => {
    return (
        <div>
            <Banner />
            <h1 className='font-rubik' >This component is for font-rubik</h1>
            <h1 className='font-dm-sans' >This component is for font-dm-sans</h1>
            <h1 className='font-outfit' >This component is for font-outfit</h1>
            <h1 className='font-inter' >This component is for font-inter</h1>
            <h1 className='font-bricolage' >This component is for font-bricolage</h1>
        </div>
    );
};

export default MyHome;