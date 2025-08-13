import CTAButton from '@/shared/CTAButton/CTAButton';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { TiStarFullOutline } from 'react-icons/ti';
import Orbit from './orbit/Orbit';

const Process = () => {

    return (
        <section className="bg-black md:p-10 pt-10">
            <div className="flex items-center justify-center md:mt-12">
                <h1 className="font-inter text-white inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="text-center md:px-10 px-2">
                <h1 className="font-bricolage md:text-5xl text-3xl font-semibold text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent my-5">
                    Our Software  <br />
                    Development Process
                </h1>
                <h6 className="font-outfit text-sm md:w-4/5 mx-auto text-[#808080]">
                    Deliver personalized experiences to your customers with AI-powered
                    <span className="hidden md:inline"><br /></span>
                    recommendation engines and dynamic content generation.
                </h6>

                <div className='flex justify-center my-8'>
                    <CTAButton label="Contact Us"
                        icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
                    />
                </div>
            </div>

            <Orbit />
        </section>
    );
};

export default Process;