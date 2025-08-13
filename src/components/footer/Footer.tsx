import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiArrowUpRight } from "react-icons/hi2";
import styles from "./style.module.css"
const socialLinks = [
    { name: "Instagram", url: "/#", icon: true },
    { name: "Facebook", url: "/#", icon: true },
    { name: "Twitter", url: "/#", icon: true },
    { name: "Linkedin", url: "/#", icon: true },
    { name: "Tiktok", url: "/#", icon: true },
    { name: "Youtube", url: "/#", icon: true }
];
const contactInfo = [
    {
        title: "ADDRESS",
        detail: "1901 thornridge Cir, Shiloh, Hawaii 81063"
    },
    {
        title: "PHONE",
        detail: "(+880) 1706439736"
    },
    {
        title: "EMAIL",
        detail: "mohibullahmohim2020@gmail.com"
    }
];


const Footer = () => {
    return (
        <footer className="mt-10 p-10 bg-black">
            <div className='my-14'>
                <h1 className='uppercase font-bricolage text-7xl text-white font-semibold' >Let&apos;s talk</h1>
            </div>
            <div className="grid grid-cols-3">
                <div className='grid-cols-1'>
                    <div className='w-4/5 text-start'>
                        <p className="text-[#A6A6A6] text-[16px] mb-5 tracking-wide">A new era of energy, elegance, and elite competition begins here. Where passion meets performance on the court like never before.</p>
                        <div className="mt-10">

                            <h1 className='font-bricolage text-xl text-white px-2' >Social media</h1>
                        </div>
                        <div className="grid grid-cols-3 gap-5 px-1 mt-3">
                            {Array.from({ length: 3 }).map((_, colIndex) => (
                                <div key={colIndex} className="space-y-1">
                                    {socialLinks
                                        .filter((_, i) => i % 3 === colIndex) // split links into 3 columns
                                        .map((link, i) => (
                                            <p key={i}>
                                                <Link
                                                    href={link.url}
                                                    className={`mx-1 flex items-center gap-1 font-outfit text-[#A6A6A6] text-sm ${link.icon ? "group" : ""}`}
                                                >
                                                    {link.name}
                                                    <span>
                                                        <HiArrowUpRight className="transform transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                                                    </span>
                                                </Link>
                                            </p>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='grid-cols-1'>
                    <div className='grid grid-cols-3'>
                        <div className='grid-cols-1'></div>
                        <div className='col-span-2'>
                            {contactInfo?.map((info, index) => (
                                <div key={index} className="flex mb-6">
                                    <div className="w-3/5 text-start">
                                        <h1 className='mb-2'>{info.title}</h1>
                                        <p className="text-[#A6A6A6] text-[16px] font-outfit">{info.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='grid-cols-1 flex justify-end'>
                    <Image className='h-64 w-auto' src={"/images/Footer-Meeting.png"} alt='Footer-Meeting.png' width={500} height={500} />
                </div>
            </div>
            {/* Footer */}
            <div className={`${styles.dashedSpaced} flex items-center justify-between text-[#A6A6A6] text-sm py-5 font-outfit mt-20`}>
                <p>2024 Software Chamber All Right Reserved</p>
                <p className='space-x-16 font-medium'>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;