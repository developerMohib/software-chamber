import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Faq = () => {
    return (
        <section className='p-10'>
            <div>
                <h1 className="font-bricolageGrotesque text-5xl font-medium text-[#0C0C0C]">Comprehensive Answers to the Most Common Questions About Our Services and How We Work</h1>
            </div>
            <div className='flex items-center justify-between mt-5 mb-8'>
                <h1 className='text-4xl text-black font-semibold font-bricolageGrotesque'>FAQ</h1>
                <button className="font-outfit text-black flex items-center gap-2"> All FAQ <span className="bg-green-500 rounded-full p-1"> <BsArrowRight className="text-xl" /> </span> </button>
            </div>
        </section>
    );
};

export default Faq;