'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { testemonialDetail } from '@/data/testimonialData';
import bgImage from "../../../public/assets/img/testimonials-bg.jpg";

interface PropData {}

const Testimonial: React.FC<PropData> = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsChanging(true);  // Start fading out
            setTimeout(() => {
                nextSlide();
                setIsChanging(false);  // Fade back in after slide changes
            }, 1000);  // Match this with the transition duration
        }, 3000);  // Duration between slide changes

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex]);

    const nextSlide = () => {
        if (!testemonialDetail || testemonialDetail.length === 0) return;
        const isLastSlide = currentIndex === testemonialDetail.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div
            className={`transition ease-in-out duration-1000 flex justify-center items-center h-[600px] box-border w-full overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500`}
            style={{
                backgroundImage: `linear-gradient(to right, rgba(147, 197, 253, 0.5), rgba(147, 197, 253, 1)), url(${bgImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {testemonialDetail.length > 0 && (
                <div
                    className={`flex flex-col items-center justify-center w-[60%] mx-auto transition-opacity duration-1000 ease-in-out ${isChanging ? 'opacity-0' : 'opacity-100'}`}
                >
                    <Image
                        alt={testemonialDetail[currentIndex].detailTitle}
                        src={testemonialDetail[currentIndex].caroselImg}
                        className="object-cover h-24 w-24 rounded-full"
                    />
                    <h2 className="mt-4 text-lg font-bold">{testemonialDetail[currentIndex].detailTitle}</h2>
                    <p className="mt-2 text-center">{testemonialDetail[currentIndex].detailDescription}</p>
                    <span className="mt-2 text-sm text-gray-500">{testemonialDetail[currentIndex].client}</span>
                    <span className="mt-1 text-sm text-gray-500">{testemonialDetail[currentIndex].date}</span>
                </div>
            )}
        </div>
    );
};

export default Testimonial;
