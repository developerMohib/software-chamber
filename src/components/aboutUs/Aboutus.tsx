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
        <section className="bg-white p-10">
            <div>
                <h1 className="text-center text-[#0C0C0C] font-semibold font-bricolageGrotesque text-5xl md:w-4/5 mx-auto"> ⁂ At Software Chamber, <span className="text-[#A5A5A5]">we specialize</span> in turning complex challenges into elegant <span className="text-[#A5A5A5]">digital solutions</span></h1>
            </div>
            <div className="md:grid md:grid-cols-8 gap-10 mt-14 px-5">
                <div className="col-span-2">
                    {
                        experiences?.map((item, index) => (<div className="my-5" key={index}>
                            <h1 className="font-bricolageGrotesque text-black font-semibold text-3xl"> {item.amount}+</h1>
                            <h4 className="text-[#A5A5A5] text-xl font-outfit"> {item.name} </h4>
                        </div>))
                    }
                </div>
                <div className="col-span-3">
                    <Image className="w-auto h-80" src={"/images/Rectangle6.png"} alt="About us" width={500} height={500} />
                </div>

                <div className="col-span-3">
                    <ul className="mt-2 space-y-3 font-medium">
                        {
                            solutions?.map((item, index) => (<li key={index} className="flex lg:col-span-1 items-start border-b border-gray-200 last:border-b-0">
                                <div className="bg-[#27B4A3] p-4 rounded-full ">
                                    <p className="bg-white h-5 w-5 rounded-full mx-auto text-center leading-5 text-xs text-black">{index + 1}</p>
                                </div>
                                <div className="ml-3 leading-5 text-gray-600 mb-4">
                                    <h1 className="font-semibold text-xl text-[#36394A] font-bricolageGrotesque"> {item.title} </h1>
                                    <p className="text-xs pr-5 text-[#666D80] font-outfit" >{item.description}</p>
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