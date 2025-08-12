import CTAButton from '@/shared/CTAButton/CTAButton';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { TiStarFullOutline } from 'react-icons/ti';

const Apart = () => {
    return (
        <section className='p-10'>
            <div className="flex items-center justify-center md:mt-20">
                <h1 className="font-inter inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div>
                <h1 className="font-bricolageGrotesque text-5xl font-medium text-[#0C0C0C]">Uncover the Design and Development Projects <span className='text-gray-400' >That Set Us Apart</span> </h1>
            </div>
            <div className='flex justify-center my-8'>
                    <CTAButton label="Contact Us"
                    icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
                    />
                </div>
        </section>
    );
};

export default Apart;