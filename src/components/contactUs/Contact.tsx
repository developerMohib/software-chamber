import InputNumber from "@/shared/inputNumber/InputNumber";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
    return (
        <section className="bg-white py-16 md:px-10 ">
            <div className="md:px-5 px-2 text-center space-y-10">
                <h1 className="font-bricolage md:text-5xl text-3xl font-medium text-[#0C0C0C]" >Let&apos;s talk about your next <span className="hidden md:inline"><br /></span> project. <span className="text-[#A5A5A5] "> We&apos;re here to help.</span></h1>
                <h6 className="font-outfit text-sm font-light text-center text-[#494949]">Deliver personalized experiences to your customers with AI-powered recommendation <span className="hidden md:inline"><br /></span> engines and dynamic content generation.</h6>
            </div>
            <div className="md:grid grid-cols-12 gap-5 mt-10 md:px-0 px-5">
                <div className="col-span-5">
                    <Image className="md:h-auto md:w-full h-56 " src={"/images/contact-image.png"} alt="Contact Image" width={500} height={500} />
                </div>
                <div className="col-span-7">

                    <form className="ml-auo space-y-4 md:mt-0 mt-3">
                        <input type="text" placeholder="First Name" className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949]" />

                        <input type="text" placeholder="Last Name" className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949]" />

                        <input type="email" placeholder="Email" className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949]" />
                        
                        <InputNumber />
                        <input type="text" placeholder="Job Title" className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949]" />

                        <textarea placeholder="Your message" rows={6} cols={6} className="w-full rounded-md py-2.5 px-4 text-sm outline-none bg-[#F3F3F3] placeholder-[#494949] opacity-100 font-outfit text-[#494949]" defaultValue={""} />

                        <button type="button" className="text-white bg-linear-to-r from-[#16AD71] to-[#2CCEBA] hover:from-[#2CCEBA] hover:to-[#16AD71] font-semibold rounded-full text-sm px-4 py-2.5 flex items-center w-36 justify-between">Submit <span><GoArrowUpRight className="bg-white text-black rounded-full text-3xl p-2" /> </span> </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;