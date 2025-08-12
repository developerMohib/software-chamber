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
            <div><h1>Don&apos;t just take our word for it. Hear what <span className="text-gray-500">our clients say</span></h1>
            </div>
        </section>
    );
};

export default Reviews;