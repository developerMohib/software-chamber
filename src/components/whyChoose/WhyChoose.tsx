"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { MdExpandLess } from "react-icons/md";
export const cardsData = [
    {
        title: "Efficiency",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: "/images/Efficiency.png",
    },
    {
        title: "Adaptability",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: "/images/Adaptability.png",
    },
    {
        title: "Scalability",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: "/images/Scalability.png",
    },
    {
        title: "Precision",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: "/images/Precision.png",
    },
    {
        title: "Innovation",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: "/images/Scalability.png",
    },
    {
        title: "Reliability",
        description:
            "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.",
        icon: "/images/Precision.png",
    },
];

const WhyChoose = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const [visibleCards, setVisibleCards] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
           setVisibleCards(width >= 1280 ? 4 : width >= 768 ? 2 : 1);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        updateCarousel();
    }, [currentIndex, visibleCards]);

    const updateCarousel = () => {
        if (trackRef.current) {
            const cardWidth = trackRef.current.children[0]?.clientWidth || 0;
            const offset = -currentIndex * cardWidth;
            trackRef.current.style.transform = `translateX(${offset}px)`;
        }
    };

    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % (cardsData.length - visibleCards + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + (cardsData.length - visibleCards + 1)) % (cardsData.length - visibleCards + 1));
    };
    return (
        <section className='p-10 bg-white'>



            <div className="w-3/5 mx-auto px-5 text-center space-y-10">
                <h1 className="font-bricolageGrotesque text-5xl font-medium text-[#0C0C0C]" >Why Choose <br /> Softwarechamber</h1>
                <h6 className="font-outfit text-sm font-light mx-auto text-center text-[#494949]">Deliver personalized experiences to your customers with AI-powered <br />recommendation engines and dynamic content generation.
                </h6>
            </div>
            <div className='flex justify-center my-8'>
                <button type="button" className="text-white bg-linear-to-r from-[#16AD71] to-[#2CCEBA] hover:from-[#2CCEBA] hover:to-[#16AD71] font-semibold rounded-full text-sm px-4 py-2.5 flex items-center w-36 justify-between"> Let&apos;s Discuss <span><GoArrowUpRight className="bg-white text-black rounded-full text-3xl p-2" /> </span> </button>
            </div>
            <div className="relative py-8">
                {/* Navigation Arrows Only */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 z-10 w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center text-white hover:text-black transition-all duration-300 hover:bg-whtie"
                >
                   <MdExpandLess className='-rotate-90 text-2xl' />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 z-10 w-12 h-12 rounded-full bg-black shadow-md flex items-center justify-center text-white hover:text-black transition-all duration-300 hover:bg-white"
                >
                   <MdExpandLess className='rotate-90 text-2xl' />
                </button>

                {/* Carousel Container */}
                <div className="overflow-hidden relative">
                    <div
                        ref={trackRef}
                        className="flex transition-transform duration-500 ease-in-out"
                    >
                        {cardsData?.map((card, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-2 py-10"
                            >
                                <div className={`bg-gray-100 rounded-2xl p-6 h-full border border-gray-200 shadow-sm ${(index) % 2 ===0 ? " " : "mt-10"} `}>
                                    <h2 className="font-bold text-xl mb-2 flex justify-between items-center font-bricolageGrotesque text-[#0C0C0C]">
                                        {card.title}
                                        <span className="bg-teal-400 text-white p-2 rounded-full font-outfit">
                                            <Image className='h-4 w-auto' src={card.icon} alt={card.title} width={500} height={500} />
                                        </span>
                                    </h2>
                                    <hr className="border-t border-gray-300 my-3" />
                                    <p className="text-gray-600 text-[16px] font-medium">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;