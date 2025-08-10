"use client"
import React, { useState } from 'react';
import ThemeController from "@/shared/themeController/ThemeController";
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineLogout } from "react-icons/ai";
import { TbMenu3 } from "react-icons/tb";
import CTAButton from '@/shared/CTAButton/CTAButton';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    // Navigation links data
    const navLinks = [
        { href: "#", label: "Features" },
        { href: "#", label: "Pricing" },
        { href: "#", label: "About" },
        { href: "#", label: "Contact" },
    ];

    const handlerContact = () => {
        console.log("Navbar clicked")
    }
    const handleDrawer = () => {
        setIsOpen(!isOpen)
        console.log("handleDrawer clicked")
    }
    console.log("handleDrawer clicked",isOpen)
    return (
        <header className="backdrop-blur-sm sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <Link href={"/"}>
                        <div className="flex-shrink-0 flex items-center gap-x-1">
                            <Image src={"/images/Logo-s.png"} className='rounded-md' alt='Software Chamber' width={30} height={10} />
                            <p className='leading-[0.8em] font-outfit'> <span className='block my-0 font-semibold tracking-[0.05em]'>Software</span> <span className='tracking-[.25em] font-light text-xs' >Chamber</span> </p>
                        </div>
                    </Link>

                    {/* CTA Button, Theme Toggle and Mobile Menu Toggle */}
                    <div className="flex items-center gap-4">
                        <CTAButton label="Contact Us"
                            icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
                            onClick={handlerContact} />

                        <button onClick={handleDrawer}>
                            <TbMenu3 className='bg-linear-to-r from-[#28303F] to-[#c7c7c7] text-white rounded-full text-4xl p-2' />
                        </button>
                        <ThemeController />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Sheet) */}
        </header>
    );
};

export default Navbar;