import Image from "next/image";
import { TiStarFullOutline } from "react-icons/ti";

const Reviews = () => {
    return (
        <section className="p-10">
            <div className="flex items-center justify-center md:mt-20">
                <h1 className="font-inter inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="my-10">
                <h1 className="font-bricolageGrotesque text-5xl font-medium text-[#E9E9E9] w-3/4 mx-auto text-center">Don&apos;t just take our word for it. Hear what <span className="text-gray-500">our clients say</span>
                </h1>
            </div>

            <div className="relative w-[95%] px-10 mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#2ccebb50]">
                {/* Glowing top border */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2CCEBA] to-transparent"></div>

                {/* Card content */}
                <div className="relative z-10 p-10 text-white">
                    <p className="w-[85%] text-start"> <q className="font-outfit font-medium text-2xl">Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo.</q></p>

                    <div className="mt-8 grid grid-cols-2 items-center">
                        {/* Left */}
                        <div className="flex gap-4 items-center">
                            <Image
                                className="w-14 h-14 rounded-full"
                                src="/images/reivew-base.png"
                                alt="author"
                                width={500}
                                height={500}
                            />

                            <div>
                                <p className="font-bricolageGrotesque font-medium">Alex Larkins</p>
                                <p className="font-outfit text-xs font-medium">
                                    Art director at Airbnb
                                </p>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex justify-end">
                            <Image className="w-32 h-auto"
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