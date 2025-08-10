import Image from 'next/image';
import React from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

const Process = () => {
    return (
        <main>
            <div className="flex items-center justify-center">
                <h1 className="font-inter inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <h1 className="font-bricolageGrotesque text-6xl font-semibold text-center bg-gradient-to-t from-white to-[#00f6d9] bg-clip-text text-transparent">
                    Our Software  <br />
                    Development Process
                </h1>
            </div>
        </main>
    );
};

export default Process;