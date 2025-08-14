import React from 'react';
import { GoArrowRight } from "react-icons/go";
import styles from "./styles.module.css"

export interface FAQItem {
    question: string;
    answer: string;
}

export const faqData: FAQItem[] = [
    {
        "question": "What software development services does your company offer?",
        "answer": "Our company specializes in custom software development, including web and mobile applications, API integrations, and enterprise software solutions tailored to your business needs."
    },
    {
        "question": "What industries do you specialize in?",
        "answer": "We have extensive experience serving industries such as finance, healthcare, e-commerce, education, and logistics, delivering solutions that meet the unique challenges of each sector."
    },
    {
        "question": "What sets your company apart from the competition?",
        "answer": "Our commitment to quality, transparent communication, and agile development process ensures timely delivery and solutions that precisely fit client requirements. Additionally, our post-launch support guarantees long-term partnership."
    },
    {
        "question": "Is my project idea and information kept confidential?",
        "answer": "Absolutely. We sign Non-Disclosure Agreements (NDAs) and implement strict security protocols to protect your project ideas and sensitive information throughout the development process."
    }
];

const Faq = () => {
    return (
        <section className='py-10 px-14 bg-white'>
            <div>
                <h1 className="font-bricolage md:text-5xl text-3xl font-medium text-[#0C0C0C] text-center mx-auto leading-14">Comprehensive Answers to the Most <span className="hidden md:inline"><br /></span>
                    <span className='inline-block align-middle font-bold mr-1.5'>
                        <svg color='#2CCEBA' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:size-11 size-8">
                            <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clipRule="evenodd" />
                        </svg>
                    </span>
                    Common Questions <span className='text-[#A5A5A5]'>About Our <span className="hidden md:inline"><br /></span> Service</span>s and How We <span className='text-[#A5A5A5]'>Work</span>
                    <span className='inline-block align-middle font-bold ml-1.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                        </svg>
                    </span>
                </h1>

            </div>
            <div className={`${styles.dashedSpaced} flex items-center justify-between my-8 pb-10`}>
                <h1 className='md:text-4xl text-3xl text-black font-semibold font-bricolage'>FAQ</h1>
                <button className="font-outfit text-black flex items-center gap-2"> All FAQ <span className="bg-[#2CCEBA] rounded-full p-2"> <GoArrowRight className="text-xl" /> </span></button>
            </div>
            {/* All FAQ */}

            <div className="relative sm:rounded-lg">
                <div className="mx-auto">
                    <div className="mx-auto grid divide-y divide-neutral-200">
                        {faqData?.map((faq, index) => (
                            <div key={index} className="py-5">
                                <details className="group">
                                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                        <span className='font-bricolage text-[#0C0C0C]' >{faq.question}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg
                                                fill="none"
                                                height={24}
                                                shapeRendering="geometricPrecision"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                width={24}
                                                className="rounded-full p-1 text-white bg-black group-open:bg-[#2CCEBA]"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="group-open:animate-fadeIn mt-3 text-[#494949] font-outfit">
                                        {faq.answer}
                                    </p>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Faq;