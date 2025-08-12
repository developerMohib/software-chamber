"use client"
import Image from 'next/image';
import React, { useEffect } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

const logos1 = [
    { id: 1, type: "text", value: "Health Care" },
    { id: 2, type: "image", value: "/images/image.png" },
    { id: 3, type: "text", value: "Developers" },
    { id: 4, type: "image", value: "/images/image-1.png" },
    { id: 5, type: "text", value: "Software" },
    { id: 6, type: "image", value: "/images/image-2.png" },
    { id: 7, type: "text", value: "Entertainment" },
    { id: 8, type: "image", value: "/images/image-3.png" },
    { id: 9, type: "text", value: "Hospitality" },
    { id: 10, type: "image", value: "/images/image-4.png" },
    { id: 11, type: "text", value: "Manufacturing" },
    { id: 12, type: "image", value: "/images/image-5.png" },
    { id: 13, type: "text", value: "Energy" },
    { id: 12, type: "image", value: "/images/image-6.png" },
    { id: 13, type: "text", value: "Fintech" },
    { id: 12, type: "image", value: "/images/image-7.png" },
];


const logos2 = [
    { id: 1, type: "text", value: "Health Care" },
    { id: 2, type: "image", value: "/images/image.png" },
    { id: 3, type: "text", value: "Developers" },
    { id: 4, type: "image", value: "/images/image-1.png" },
    { id: 5, type: "text", value: "Software" },
    { id: 6, type: "image", value: "/images/image-2.png" },
    { id: 7, type: "text", value: "Entertainment" },
    { id: 8, type: "image", value: "/images/image-3.png" },
    { id: 9, type: "text", value: "Hospitality" },
    { id: 10, type: "image", value: "/images/image-4.png" },
    { id: 11, type: "text", value: "Manufacturing" },
    { id: 12, type: "image", value: "/images/image-5.png" },
    { id: 13, type: "text", value: "Energy" },
    { id: 12, type: "image", value: "/images/image-6.png" },
    { id: 13, type: "text", value: "Fintech" },
    { id: 12, type: "image", value: "/images/image-7.png" },
];

const Workon = () => {
    useEffect(() => {
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
      @keyframes marquee-move {
        to {
          transform: translateX(calc(-100cqw - var(--item-gap)));
        }
      }
    `;
        document.head.appendChild(styleSheet);
        return () => {
            document.head.removeChild(styleSheet);
        };
    }, []);

    const Marquee = ({ logos, direction = 'forwards' }: { logos: typeof logos1; direction?: string }) => {
        const numItems = logos.length;
        const speed = '40s';
        const itemWidth = '80px';
        const itemGap = '20px';

        return (
            <div
                className="max-w-full overflow-hidden"
                style={{
                    '--speed': speed,
                    '--numItems': numItems,
                    '--item-width': itemWidth,
                    '--item-gap': itemGap,
                    '--direction': direction,
                    maskImage: 'linear-gradient(to right, transparent, black 1rem, black calc(100% - 2rem), transparent)',
                } as React.CSSProperties}
            >
                <div
                    className="w-max flex"
                    style={{
                        '--track-width': `calc(var(--item-width) * ${numItems})`,
                        '--track-gap': `calc(var(--item-gap) * ${numItems})`,
                    } as React.CSSProperties}
                >
                    {[...logos, ...logos].map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 flex justify-center items-center text-white"
                            style={{
                                width: 'var(--item-width)',
                                aspectRatio: '1 / 1.3',
                                marginRight: 'var(--item-gap)',
                                animation: `marquee-move var(--speed) linear infinite ${direction}`,
                            } as React.CSSProperties}
                        >
                            <div className="flex items-center">
                                {item.type === "image" ? (
                                    <div className="w-auto h-10">
                                        <Image src={item.value} alt="logo" width={500} height={500} />
                                    </div>
                                ) : (
                                    <span className="text-sm font-medium">{item.value}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <section className='pt-10 px-10 pb-16 bg-black'>
            <div className="flex items-center justify-center mt-10">
                <h1 className="font-inter inline-block bg-radial from-[#00000045] to-[#2ccebb6f] to-90% border border-[#61dfd0] px-4 py-2 text-center rounded-full text-xs font-light text-white">
                    <TiStarFullOutline className="inline-block mr-2 text-white" />
                    Smarter Idea, instant solutions
                </h1>
            </div>
            <div className="items-center overflow-hidden">
                <div className="w-full flex flex-col gap-y-0.5">
                    <Marquee logos={logos1} />
                    <Marquee logos={logos2} direction="reverse" />
                </div>
            </div>
        </section>
    );
}
export default Workon;