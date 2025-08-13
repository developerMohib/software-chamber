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
        <main className="bg-[url('/images/bgbanner.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center bg-black py-16">

            {/* Right side blur part start */}
            <div className="absolute -left-10 top-16 w-[300px] h-8 bg-gradient-to-br from-[#21f7da] to-transparent rounded-full rotate-[25deg] overflow-hidden blur-[35px] z-50"></div>
            <div className="absolute -left-10 top-50 w-[200px] h-8 bg-gradient-to-tr from-[#21f7da] to-transparent rounded-full blur-[35px] overflow-hidden rotate-[35deg]"></div>
            {/* Right side blur part end and left side start */}
            <div className="absolute -right-10 top-16 w-[300px] h-8 bg-gradient-to-bl from-[#21f7da] to-transparent rounded-full blur-[35px] -rotate-[25deg] overflow-hidden z-50"></div>
            <div className="absolute -right-10 top-50 w-[200px] h-8 bg-gradient-to-bl from-[#21f7da] to-transparent rounded-full blur-[35px] overflow-hidden -rotate-[35deg]"></div>
            {/* Left side blur part end */}


            <div className="flex items-center justify-center">
                <h1 className="font-inter font-light text-white inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="flex items-center justify-center md:mt-10 mt-6">
                <h1 className="font-bricolage md:text-7xl text-3xl text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent font-medium">
                    We are your Software <br />
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

            <div className="flex items-center justify-center gap-4 md:mt-7 md:mb-10 my-4">
                <CTAButton label="Contact Us"
                    icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
                    onClick={handlerContact} />
            </div>
            <div className="md:grid grid-cols-4 px-10">
                <div className="grid-cols-1 py-2">
                    <div className="flex flex-col justify-between h-full items-center md:gap-0 gap-3 sm:w-full">
                        <ItemButton label="Web Development" className=" " icon={<HiMiniDocumentCheck className="text-white text-3xl" />} />
                        <ItemButton label="Mobile App Devolopment" className=" " icon={<HiMiniDocumentCheck className="text-white text-3xl" />} />
                    </div>
                </div>
                <div className="col-span-2 my-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="grid-cols-1">
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus est cupiditate sint libero officia dignissimos possimus obcaecati impedit distinctio, voluptates ipsa consectetur officiis dolore in atque necessitatibus ad amet excepturi.</p>
                        </div>
                        <div className="grid-cols-1 bg-white">
                            <h1 className="font-rubik font-medium md:text-2xl text-[16px]">Software Service Solutions</h1>
                        </div>
                    </div>
                </div>
                <div className="grid-cols-1 py-2">
                    <div className="flex flex-col justify-between h-full items-center md:gap-0 gap-3 sm:w-full">
                        <ItemButton label="UI/UX Engineering" className=" " icon={<HiMiniDocumentCheck className="text-white text-3xl" />} />
                        <ItemButton label="Software Services" className=" " icon={<HiMiniDocumentCheck className="text-white text-3xl" />} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;