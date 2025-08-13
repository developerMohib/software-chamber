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
            <div className='flex items-center justify-between md:mt-5 mb-8'>
                <h1 className='md:text-4xl text-3xl text-black font-semibold font-bricolage'>Services 
                    <span className='inline-block align-middle font-bold mr-1.5'>
                        <svg color='#2CCEBA' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-11">
                            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                        </svg>
                    </span>
                </h1>
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
                            <h1 className= {`md:text-4xl text-3xl ${isGreen ? "text-white" : "text-black"} font-semibold mb-2 font-bricolage`} >{card.title}</h1>
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