import { BsArrowRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
const servicesList = [
    {
        "title": "Web & Mobile App Devolopment",
        "description": "Software Chamber specializes in creating powerful, scalable, and secure e-",
        "color": "gray"
    },
    {
        "title": "Application Software Services",
        "description": "We design and build scalable mobile applications for Software Chamber. ",
        "color": "green"
    },
    {
        "title": "Software Coding & Optimuation",
        "description": "We craft intuitive and visually appealing designs for Software Chamber.",
        "color": "gray"
    }
]

const Services = () => {
    return (
        <section className="bg-white p-10">
            <div className='flex items-center justify-between mt-5 mb-8'>
                <h1 className='text-4xl text-black font-semibold font-bricolageGrotesque'>Services icon</h1>
                <button className="font-outfit text-black flex items-center gap-2"> All Services <span className="bg-gray-100 rounded-full p-1"> <BsArrowRight className="text-xl" /> </span> </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 hover:duration-200">
                {servicesList?.map((card, index) => {
                    const isGreen = card.color === "green";
                    return (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 transform transition-all duration-300
              ${isGreen ? "bg-[#27B4A3] text-white" : "bg-[#F3F3F3]"}
              text-black hover:-translate-y-1`}
                        >
                            <h1 className= {`text-4xl ${isGreen ? "text-white" : "text-black"} font-semibold mb-2 font-bricolageGrotesque`} >{card.title}</h1>
                            <p className={`my-6 tracking-wide font-outfit text-sm ${isGreen ? "text-white" : "text-[#808080]"} `}>{card.description}</p>
                            <button className="cursor-pointer">
                                <span className="bg-white rounded-full inline-flex items-center justify-center p-5 shadow-md">
                                    <FiArrowUpRight className="text-xl text-black" />
                                </span>
                            </button>
                        </div>
                    );
                })}
            </div>


        </section>
    );
};

export default Services;