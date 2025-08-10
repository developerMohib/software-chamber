"use client"
import CTAButton from "@/shared/CTAButton/CTAButton";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";
const Banner = () => {
    const handlerContact = () => {
        console.log("Contact to mohibullah")
    }
    return (
        <main>
            <div className="flex items-center justify-center md:mt-20">
                <h1 className="font-inter inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="font-bricolageGrotesque text-5xl font-semibold text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent">
                    We are your Software <br />
                    Development{" "}
                    <span className="inline-flex items-center">
                        <Image
                            className="mr-1"
                            src="/images/code-frame-1.png"
                            alt="code image"
                            width={43}
                            height={43}
                        />
                        <Image
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

            <div className="flex items-center justify-center gap-4 mt-7">
                <CTAButton label="Contact Us"
                    icon={<AiOutlineLogout className="bg-white text-black rounded-full text-3xl p-2" />}
                    onClick={handlerContact} />
            </div>
        </main>
    );
};

export default Banner;