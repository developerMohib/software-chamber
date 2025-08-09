import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import { TiStarFullOutline } from "react-icons/ti";
const Banner = () => {
    return (
        <main>
            <div className="flex items-center justify-center">
                <h1 className="font-inter inline-block bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.05),_rgba(44,206,187,0.15))] px-3 py-1 text-center rounded-full text-xs font-light">
                    <TiStarFullOutline className="inline-block mr-2" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="font-bricolageGrotesque text-6xl font-semibold text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent">
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
                    </span>{" "}
                    Team <br />
                    in The Cloud
                </h1>
            </div>

            <div className="flex items-center justify-center gap-4 mt-7">
                <button className='font-outfit border border-[#646567] rounded-full px-3 py-1 flex gap-2 items-center cursor-pointer bg-linear-to-r from-[#28303F] to-[#7a7a7a] text-white'>Contact Us <span> <AiOutlineLogout className='bg-white text-black rounded-full text-3xl p-2' /> </span> </button>
            </div>
        </main>
    );
};

export default Banner;