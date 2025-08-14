"use client"
import Image from "next/image";
import CTAButton from "@/shared/CTAButton/CTAButton";
import ItemButton from "@/shared/itemButton/ItemButton";
import { AiOutlineLogout } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";
import { HiMiniDocumentCheck } from "react-icons/hi2";
const Banner = () => {
  const handlerContact = () => {
    console.log("Contact to mohibullah")
  }
  return (

    <section className="bg-[url('/images/bgbanner.png')] bg-center bg-no-repeat bg-cover bg-black py-16 overflow-hidden w-full mx-auto" aria-label="Hero Banner">

      {/* Right side blur part start */}

      {/* Left side blur part end */}
      {/* Decorative blur parts (hidden from screen readers) */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -left-10 md:top-26 top-12 md:w-64 w-40 h-8 bg-gradient-to-br from-[#21f7da] to-transparent rounded-full rotate-[25deg] overflow-hidden blur-[35px] z-50 "> </div>
        <div className="absolute -left-10 md:top-56 top-44 md:w-64 w-40 h-8 bg-gradient-to-tr from-[#21f7da] to-transparent rounded-full blur-[35px] overflow-hidden rotate-[35deg]"></div>
        {/* Right side blur part end and left side start */}
        <div className="absolute -right-10 md:top-16 top-12 md:w-80 w-40 h-8 bg-gradient-to-bl from-[#21f7da] to-transparent rounded-full blur-[35px] -rotate-[25deg] overflow-hidden z-50"></div>
        <div className="absolute -right-10 md:top-50 top-40 md:w-48 w-40 h-8 bg-gradient-to-bl from-[#21f7da] to-transparent rounded-full blur-[35px] overflow-hidden -rotate-[35deg]"></div>
      </div>



      <header className="flex justify-center container">
        <p className="font-inter font-light text-white inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs">
          <TiStarFullOutline className="inline-block mr-2 text-white" aria-hidden />
          Smarter Idea, instant solutions
        </p>
      </header>
      <div className="flex items-center justify-center md:mt-10 mt-6 container">
        <h1 className="font-bricolage md:text-7xl text-3xl text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent font-medium">
          We are your Software <span className="hidden md:inline"><br /></span>
          Development{" "}
          <span className="inline-flex items-center">
            <Image
              className="mr-1 md:h-11 w-auto h-5"
              src="/images/code-frame-1.png"
              alt="code image"
              width={43}
              height={43}
            />
            <Image
              className="md:h-11 w-auto h-5"
              src="/images/code-frame-2.png"
              alt="code image"
              width={40}
              height={40}
            />
          </span> {" "}
          Team <br />
          in The Cloud
        </h1>
      </div>

      <div className="flex items-center justify-center gap-4 md:mt-7 md:mb-10 my-4 container">
        <CTAButton label="Contact Us"
          icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
          onClick={handlerContact} />
      </div>
      <div className="md:grid grid-cols-4 px-10 container">
        <div className="grid-cols-1 py-2">
          <div className="flex flex-col justify-evenly h-full items-center md:gap-0 gap-3 sm:w-full">
            <ItemButton label="Web Development" className=" " icon={<HiMiniDocumentCheck className="text-white md:text-3xl text-xl" />} />
            <ItemButton label="Mobile App Devolopment" className=" " icon={<HiMiniDocumentCheck className="text-white md:text-3xl text-xl" />} />
          </div>
        </div>


        <div className="col-span-2 my-3">
          <div className="grid grid-cols-2 gap-3 border border-gray-600 p-3 rounded-2xl bg-[#24292F]">

            {/* 1st Child */}
            <div className="relative grid-cols-1 py-6 overflow-hidden rounded-xl">
              {/* Blur circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-[#2ccebb75] rounded-full blur-3xl"></div>
              </div>
              {/* Content */}
              <div className="grid grid-cols-3">
                <div className="col-start-2 col-span-2 flex justify-start border border-black rounded-lg p-1">
                  <button className="font-rubik py-2 text-sm px-5 md:font-semibold font-normal rounded-lg border text-white bg-[#253337] border-black">
                    Mobile app
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3 my-2">
                <div className="col-span-2 flex justify-start border border-white rounded-lg p-1">
                  <button className="font-rubik py-2 text-sm px-5 md:font-semibold font-normal rounded-lg border text-white bg-[#2ccebb82] border-[#2ccebb75]">
                    Software
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-3">
                <div className="col-start-2 col-span-2 flex justify-start border border-black rounded-lg p-1">
                  <button className="font-rubik py-2 text-sm px-5 md:font-semibold font-normal rounded-lg border text-white bg-[#253337] border-black">
                    Website
                  </button>
                </div>
              </div>
            </div>

            {/* 2nd Child */}
            <div className="relative grid-cols-1 md:p-6 p-1 overflow-hidden rounded-xl">
              {/* Blur circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-400/40 rounded-full blur-3xl"></div>
              </div>
              {/* Content */}
              <div className="relative z-10 text-start">
                <h1 className="font-rubik font-medium md:text-2xl text-base text-white">
                  Software Service Solutions
                </h1>
                <p className="font-inter md:text-base text-xs text-white my-4">
                  Plan, track, and manage projects with precision tools.
                </p>
                <button className="font-rubik py-2 px-5 rounded-full text-white bg-[#253337]">
                  Discover
                </button>
              </div>
            </div>

          </div>
        </div>


        <div className="grid-cols-1 py-2">
          <div className="flex flex-col justify-evenly h-full items-center md:gap-0 gap-3 sm:w-full">
            <ItemButton label="UI/UX Engineering" className=" " icon={<HiMiniDocumentCheck className="text-white md:text-3xl text-xl" />} />
            <ItemButton label="Software Services" className=" " icon={<HiMiniDocumentCheck className="text-white md:text-3xl text-xl" />} />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Banner;