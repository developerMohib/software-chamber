import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { RiDonutChartFill, RiSnowflakeFill, RiStarFill, RiCloseCircleFill } from "react-icons/ri";

export const cardsData = [
    {
        title: "Efficiency",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: RiDonutChartFill,
    },
    {
        title: "Adaptability",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: RiSnowflakeFill,
    },
    {
        title: "Scalability",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: RiStarFill,
    },
    {
        title: "Precision",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: RiCloseCircleFill,
    },
];

const WhyChoose = () => {
    return (
        <section className='p-10'>
            <div className="w-3/5 mx-auto px-5 text-center space-y-10">
                <h1 className="font-bricolageGrotesque text-5xl font-medium text-[#0C0C0C]" >Why Choose Softwarechamber</h1>
                <h6 className="font-outfit w-1/2 text-sm font-light mx-auto text-center text-[#494949]">Deliver personalized experiences to your customers with AI-powered recomme
                </h6>
            </div>
            <div className='flex justify-center my-8'>
                <button type="button" className="text-white bg-linear-to-r from-[#16AD71] to-[#2CCEBA] hover:from-[#2CCEBA] hover:to-[#16AD71] font-semibold rounded-full text-sm px-4 py-2.5 flex items-center w-36 justify-between"> Let&apos;s Discuss <span><GoArrowUpRight className="bg-white text-black rounded-full text-3xl p-2" /> </span> </button>
            </div>
            <div className="flex gap-6 overflow-x-auto py-6">
                {cardsData.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <div
                            key={index}
                            className="bg-gray-100 rounded-2xl p-6 w-72 flex flex-col justify-between shadow-sm"
                        >
                            <div>
                                <h2 className="font-bold text-xl mb-2 flex justify-between items-center">
                                    {card.title}
                                    <span className="bg-teal-400 text-white p-2 rounded-full">
                                        <Icon size={20} />
                                    </span>
                                </h2>
                                <hr className="border-t border-gray-300 my-3" />
                                <p className="text-gray-600 text-sm">{card.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default WhyChoose;