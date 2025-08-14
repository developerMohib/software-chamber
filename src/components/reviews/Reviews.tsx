import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

const Reviews = () => {
    return (
        <section className="md:px-10 px-5 pt-5 md:pb-20 pb-10 bg-black">
            <header className="flex justify-center container md:mt-20 mt-8">
                <p className="font-inter font-light text-white inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs">
                    <TiStarFullOutline className="inline-block mr-2 text-white" aria-hidden />
                    Smarter Idea, instant solutions
                </p>
            </header>
            <div className="my-10">
                <h1 className="font-bricolage md:text-5xl text-3xl font-medium text-[#E9E9E9] text-center">Don&apos;t just take our word for it. Hear <span className="hidden md:inline"><br /></span>what <span className="text-gray-500">our clients say</span>
                </h1>
            </div>

            {/* client says */}
            <div className="relative md:w-[95%] md:px-10 mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#2ccebb50]">
                {/* Glowing top border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2CCEBA] to-transparent"></div>

                {/* Card content */}
                <div className="relative z-10 md:py-10 py-5 md:px-14 px-4 text-white">
                    <p className="md:w-[85%] text-start"> <q className="font-outfit font-medium md:text-2xl text-base">Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo.</q></p>

                    <div className="mt-8 grid grid-cols-2 items-center">
                        {/* Left */}
                        <div className="flex md:gap-4 gap-2 items-center">
                            <Image
                                className="w-14 h-14 rounded-full"
                                src="/images/reivew-base.png"
                                alt="author"
                                width={500}
                                height={500}
                            />

                            <div>
                                <p className="font-bricolage md:text-base text-xs font-medium">Alex Larkins</p>
                                <p className="font-outfit md:text-xs text-[10px] md:font-medium">
                                    Art director at Airbnb
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex justify-end">
                            <Image className="md:w-32 w-24 h-auto"
                                src="/images/mono.png"
                                alt="mono"
                                width={500} height={300}
                            />
                        </div>
                    </div>
                </div>

                {/* Outer glow shadow */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_10px_rgba(44,206,186,0.3)] pointer-events-none"></div>
            </div>
        </section>
    );
};

export default Reviews;