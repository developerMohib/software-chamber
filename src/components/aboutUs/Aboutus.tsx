import Image from "next/image";

const solutions = [
    {
        "title": "Your Team in the cloud",
        "description": "We Hire Best and brightest Talents to build world class technology"
    },
    {
        "title": "Grow more with less",
        "description": "We have a competitive pricing structure"
    },
    {
        "title": "Weekly sprint and reviews",
        "description": "Our fast review and feedback loop is designed to keep in you in the driver's seat"
    },
    {
        "title": "Communication First",
        "description": "We use modem tools and services to collaborate"
    },
]

const experiences = [
    {
        "amount": "20",
        "name": "Tech Partners"
    },
    {
        "amount": "150",
        "name": "Project Completed"
    },
    {
        "amount": "1k",
        "name": "Satisfied Customers"
    }
]


const Aboutus = () => {
    return (
        <section className="bg-white md:p-10 p-3 md:mt-10 mt-5">
            <div>
                <h1 className="text-center text-[#0C0C0C] font-semibold font-bricolage md:text-5xl text-3xl md:w-4/5 mx-auto"><span className='inline-block align-middle font-bold mr-1.5'>
                    <svg color='#2CCEBA' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-11">
                        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                    </svg>
                </span>At Software Chamber, <span className="text-[#A5A5A5]">we specialize</span> in turning complex challenges into elegant <span className="text-[#A5A5A5]">digital solutions</span> <span className='inline-block align-middle font-bold ml-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>
                    </span></h1>
            </div>
            <div className="md:grid md:grid-cols-8 gap-10 mt-14 px-5 md:text-start text-center">
                <div className="col-span-2">
                    {
                        experiences?.map((item, index) => (<div className="my-5" key={index}>
                            <h1 className="font-bricolage text-black font-semibold text-3xl"> {item.amount}+</h1>
                            <h4 className="text-[#A5A5A5] text-xl font-outfit"> {item.name} </h4>
                        </div>))
                    }
                </div>
                <div className="col-span-3">
                    <Image className="w-auto h-80" src={"/images/Rectangle6.png"} alt="About us" width={500} height={500} />
                </div>

                <div className="col-span-3">
                    <ul className="space-y-3 font-medium md:mt-2 mt-7">
                        {
                            solutions?.map((item, index) => (<li key={index} className="flex lg:col-span-1 items-start border-b border-gray-200 last:border-b-0">
                                <div className="bg-[#27B4A3] p-4 rounded-full ">
                                    <p className="bg-white h-5 w-5 rounded-full mx-auto text-center leading-5 text-xs text-black">{index + 1}</p>
                                </div>
                                <div className="ml-3 leading-5 text-gray-600 mb-4">
                                    <h1 className="font-semibold text-xl text-[#36394A] font-bricolage text-start"> {item.title} </h1>
                                    <p className="text-xs pr-5 text-[#666D80] font-outfit text-start" >{item.description}</p>
                                </div>
                            </li>))
                        }

                    </ul>
                </div>
            </div >
        </section >
    );
};

export default Aboutus;