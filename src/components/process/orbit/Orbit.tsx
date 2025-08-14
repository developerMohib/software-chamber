"use client"
import Image from "next/image";

const Orbit = () => {
    const steps = [
        { label: "Code", num: 1 },
        { label: "Build", num: 2 },
        { label: "Test", num: 3 },
        { label: "Release", num: 4 },
        { label: "Deploy", num: 5 },
        { label: "Monitor", num: 6 },
        { label: "Build", num: 7 },
    ];
    return (
        <div className="">

            <div className="relative flex justify-center items-center">
                <div className="absolute w-full"></div>

                {/* Step Items */}
                <div className="flex justify-between w-full max-w-3xl absolute top-0">
                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white text-sm shadow-md">
                                {step.num}
                            </div>
                            <span className="mt-2 text-teal-400 font-medium">{step.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative">

               <Image
                        className="w-full h-[500px] mx-auto"
                        src={"/images/earth.png"}
                        alt="solar"
                        width={500}
                        height={500}
                    />
            </div>
        </div>

    );
};

export default Orbit;