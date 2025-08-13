import { FaSpotify, FaDropbox, FaGoogleDrive } from "react-icons/fa";
import React from 'react';

const BelovedCompany = () => {
    return (
        <section className='p-10 bg-black'>
            <div className='grid grid-cols-5 gap-6'>
                <div className='col-span-3'>
                    <h1 className='font-medium text-white text-6xl'>Our Stack Powers of <br /> the <span className='text-[#A5A5A5]'>World&apos;s</span> Most <br /> <span className='text-[#A5A5A5]'>Beloved Companies</span></h1>
                </div>
                <div className='col-span-2 '>
                    {/* First line button */}
                    <div className="grid grid-cols-2">
                        <div className="col-span-2">
                            <div className="flex flex-row justify-end items-center gap-5">
                                <button className="bg-linear-to-t from-gray-900 to-[#2ccebbee] to-50% px-5 py-3 rounded-full font-outfit font-semibold flex items-center gap-2 text-[#e9e9e9]"> <span className=""> <FaSpotify className="rounded-full text-4xl p-2 bg-white text-[#2CCEBA]" /> </span> Spotify</button>
                                <button className="bg-linear-to-t from-gray-900 to-[#2ccebbee] to-50% px-5 py-3 rounded-full font-outfit font-semibold flex items-center gap-2 text-[#e9e9e9]"> <span className=""> <FaSpotify className="rounded-full text-4xl p-2 bg-white text-[#2CCEBA]" /> </span> TalentQI </button>
                            </div>
                        </div>
                    </div>

                    {/* Second Line Button */}
                    <div className="grid grid-cols-5">
                        <div className="col-span-4">
                            <div className="flex flex-row justify-end items-center gap-5">
                                <button className="bg-linear-to-t from-gray-900 to-[#2ccebbee] to-50% px-5 py-3 rounded-full font-outfit font-semibold flex items-center gap-2 text-[#e9e9e9]"> <span className=""> <FaDropbox className="rounded-full text-4xl p-2 bg-white text-[#2CCEBA]" /> </span> Spotify</button>
                                <button className="bg-linear-to-t from-gray-900 to-[#2ccebbee] to-50% px-5 py-3 rounded-full font-outfit font-semibold flex items-center gap-2 text-[#e9e9e9]"> <span className=""> <FaSpotify className="rounded-full text-4xl p-2 bg-white text-[#2CCEBA]" /> </span> Fliqpay </button>
                            </div>
                        </div>
                    </div>

                    {/* Third Line Button */}
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                            <div className="flex flex-row justify-end items-center gap-5">
                                <button className="bg-linear-to-t from-gray-900 to-[#2ccebbee] to-50% px-5 py-3 rounded-full font-outfit font-semibold flex items-center gap-2 text-[#e9e9e9]"> <span className=""> <FaGoogleDrive className="rounded-full text-4xl p-2 bg-white text-[#2CCEBA]" /> </span> Spotify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BelovedCompany;