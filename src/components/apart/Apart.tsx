import CTAButton from '@/shared/CTAButton/CTAButton';
import Image from 'next/image';
import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { TiStarFullOutline } from 'react-icons/ti';
import styles from "./styles.module.css";

const Apart = () => {
    return (
        <section className='md:p-10 px-3 pb-6 bg-black'>
            <div className={`relative md:py-1 py-3 ${styles.gradientBorder}`}>
                <div className="flex items-center justify-center md:mt-20 mt-8">
                    <h1 className="font-inter inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light text-white">
                        <TiStarFullOutline className="inline-block mr-2 text-white" />
                        Smarter Idea, instant solutions
                    </h1>
                </div>
                <div>
                    <Image src={"/images/Logo-icon-wrapper.png"} alt={'Logo'} width={500} height={500} className='h-12 w-auto mx-auto text-center mt-8 mb-5' />
                    <h1 className="font-bricolage md:text-5xl text-3xl font-medium text-[#E9E9E9] text-center">Uncover the Design and Development <span className="hidden md:inline"><br /></span> Projects <span className='text-gray-400' >That Set Us Apart</span> </h1>
                </div>
                <div className='flex justify-center my-8'>
                    <CTAButton label="Contact Us"
                        icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
                    />
                </div>
            </div>
        </section>
    );
};

export default Apart;