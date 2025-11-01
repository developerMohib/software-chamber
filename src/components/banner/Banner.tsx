"use client"
import Image from "next/image";
import CTAButton from "@/shared/CTAButton/CTAButton";
import ItemButton from "@/shared/itemButton/ItemButton";
import { AiOutlineLogout } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";
import { HiMiniDocumentCheck } from "react-icons/hi2";
import { useState } from "react";

const SERVICES = [
  { label: "Web Development", icon: <HiMiniDocumentCheck className="text-white md:text-3xl text-xl" /> },
  { label: "Mobile App Development", icon: <HiMiniDocumentCheck className="text-white md:text-3xl text-xl" /> },
  { label: "UI/UX Engineering", icon: <HiMiniDocumentCheck className="text-white md:text-3xl text-xl" /> },
  { label: "Software Services", icon: <HiMiniDocumentCheck className="text-white md:text-3xl text-xl" /> },
] as const;

const Banner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContact = async () => {
    setIsLoading(true);
    try {
      console.log("Contact to mohibullah");
      // Add actual contact logic here
      // await contactService.sendMessage();
    } catch (error) {
      console.error("Contact error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      className="bg-[url('/images/bgbanner.png')] bg-center bg-no-repeat bg-cover bg-black py-16 overflow-hidden w-full mx-auto relative"
      aria-label="Hero Banner"
      role="banner"
    >
      {/* Decorative blur parts (hidden from screen readers) */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-10 md:top-26 top-12 md:w-64 w-40 h-8 bg-gradient-to-br from-[#21f7da] to-transparent rounded-full rotate-[25deg] overflow-hidden blur-[35px] z-50"></div>
        <div className="absolute -left-10 md:top-56 top-44 md:w-64 w-40 h-8 bg-gradient-to-tr from-[#21f7da] to-transparent rounded-full blur-[35px] overflow-hidden rotate-[35deg]"></div>
        <div className="absolute -right-10 md:top-16 top-12 md:w-80 w-40 h-8 bg-gradient-to-bl from-[#21f7da] to-transparent rounded-full blur-[35px] -rotate-[25deg] overflow-hidden z-50"></div>
        <div className="absolute -right-10 md:top-50 top-40 md:w-48 w-40 h-8 bg-gradient-to-bl from-[#21f7da] to-transparent rounded-full blur-[35px] overflow-hidden -rotate-[35deg]"></div>
      </div>

      {/* Header Tagline */}
      <header className="flex justify-center container">
        <p className="font-inter font-light text-white inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs">
          <TiStarFullOutline className="inline-block mr-2 text-white" aria-hidden="true" />
          Smarter Idea, instant solutions
        </p>
      </header>

      {/* Main Heading */}
      <div className="flex items-center justify-center md:mt-10 mt-6 container">
        <h1 className="font-bricolage md:text-7xl text-3xl text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent font-medium leading-tight">
          We are your Software <span className="hidden md:inline"><br /></span>
          Development{" "}
          <span className="inline-flex items-center" role="img" aria-label="coding brackets">
            <Image
              className="mr-1 md:h-11 w-auto h-5"
              src="/images/code-frame-1.png"
              alt=""
              width={43}
              height={43}
              priority
            />
            <Image
              className="md:h-11 w-auto h-5"
              src="/images/code-frame-2.png"
              alt=""
              width={40}
              height={40}
              priority
            />
          </span>{" "}
          Team <br />
          in The Cloud
        </h1>
      </div>

      {/* CTA Button */}
      <div className="flex items-center justify-center gap-4 md:mt-7 md:mb-10 my-4 container">
        <CTAButton 
          label={isLoading ? "Connecting..." : "Contact Us"}
          icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" aria-hidden="true" />}
          onClick={handleContact}
        />
      </div>

      {/* Services Grid */}
      <div className="md:grid grid-cols-4 px-10 container" role="navigation" aria-label="Services navigation">
        {/* Left Services */}
        <div className="grid-cols-1 py-2">
          <nav className="flex flex-col justify-evenly h-full items-center md:gap-0 gap-3 sm:w-full" aria-label="Primary services">
            {SERVICES.slice(0, 2).map((service) => (
              <ItemButton
                key={service.label}
                label={service.label}
                icon={service.icon}
                className="w-full"
              />
            ))}
          </nav>
        </div>

        {/* Middle Content Cards */}
        <div className="col-span-2 my-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-gray-600 p-3 rounded-2xl bg-[#24292F]">
            
            {/* Services Buttons Card */}
            <div className="relative grid-cols-1 py-6 overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-48 h-48 bg-[#2ccebb75] rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 space-y-3">
                <div className="flex justify-start border border-black rounded-lg p-1">
                  <button 
                    className="font-rubik py-2 text-sm px-5 md:font-semibold font-normal rounded-lg border text-white bg-[#253337] border-black w-full text-left transition-colors hover:bg-[#2a3a3e] focus:outline-none focus:ring-2 focus:ring-[#21f7da] focus:ring-opacity-50"
                    aria-label="Mobile app services"
                  >
                    Mobile app
                  </button>
                </div>
                <div className="flex justify-start border border-white rounded-lg p-1">
                  <button 
                    className="font-rubik py-2 text-sm px-5 md:font-semibold font-normal rounded-lg border text-white bg-[#2ccebb82] border-[#2ccebb75] w-full text-left transition-colors hover:bg-[#21f7da] hover:bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    aria-label="Software services"
                  >
                    Software
                  </button>
                </div>
                <div className="flex justify-start border border-black rounded-lg p-1">
                  <button 
                    className="font-rubik py-2 text-sm px-5 md:font-semibold font-normal rounded-lg border text-white bg-[#253337] border-black w-full text-left transition-colors hover:bg-[#2a3a3e] focus:outline-none focus:ring-2 focus:ring-[#21f7da] focus:ring-opacity-50"
                    aria-label="Website services"
                  >
                    Website
                  </button>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="relative grid-cols-1 md:p-6 p-4 overflow-hidden rounded-xl">
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="w-48 h-48 bg-gray-400/40 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-start h-full flex flex-col justify-center">
                <h2 className="font-rubik font-medium md:text-2xl text-lg text-white">
                  Software Service Solutions
                </h2>
                <p className="font-inter md:text-base text-sm text-white my-4 leading-relaxed">
                  Plan, track, and manage projects with precision tools tailored to your business needs.
                </p>
                <button 
                  className="font-rubik py-2 px-5 rounded-full text-white bg-[#253337] border border-transparent transition-all hover:bg-[#2a3a3e] hover:border-[#21f7da] focus:outline-none focus:ring-2 focus:ring-[#21f7da] focus:ring-opacity-50 w-fit"
                  aria-label="Discover our software solutions"
                >
                  Discover
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Right Services */}
        <div className="grid-cols-1 py-2">
          <nav className="flex flex-col justify-evenly h-full items-center md:gap-0 gap-3 sm:w-full" aria-label="Secondary services">
            {SERVICES.slice(2, 4).map((service) => (
              <ItemButton
                key={service.label}
                label={service.label}
                icon={service.icon}
                className="w-full"
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Banner;