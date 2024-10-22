"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { StaticImageData } from "next/image";

interface ImageData {
  src: any;
  alt?: any;
  heigth?: any;
  width?: any;
}

interface PropData {
  carouselImage?: StaticImageData[];
  detailTitle?: string;
  detailDescription?: string;
  bgColor?: string;
  category?: string;
  projectLink?: string;
  responsibility?: string;
}

const PortfolioDetailCard: React.FC<PropData> = ({
  carouselImage = [],
  detailTitle,
  detailDescription,
  bgColor,
  category,
  projectLink,
  responsibility,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    if (!carouselImage || carouselImage.length === 0) return; // Guard clause
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselImage.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    if (!carouselImage || carouselImage.length === 0) return; // Guard clause
    const isLastSlide = currentIndex === carouselImage.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="container-fluid container-xl h-auto">
      <div
        className={`relative group w-full mt-20  h-[600px] box-border ${"bg-blue-300"}`}
      >
        <div
          className={`transition ease-in-out duration-1000  flex justify-center items-center box-border h-full  w-full overflow-hidden absolute top-0 bottom-0`}
        >
          {carouselImage.length > 0 && (
            <Image
              alt="image"
              src={carouselImage[currentIndex]}
              layout="fill"
            />
          )}
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex bottom-[-40px] absolute left-0 right-0  justify-center">
          {carouselImage.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`mt-2 cursor-pointer ${
                slideIndex === currentIndex ? "text-blue-600" : "text-slate-300"
              }`}
            >
              <RxDotFilled size={30} />
            </div>
          ))}
        </div>
      </div>

      <div className="row justify-content-between  mt-24 mb-28 relative">
        <div className="col-lg-8" data-aos="fade-up">
          <div className="portfolio-description flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">{detailTitle} </h2>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span className="text-lg">{detailDescription}</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
            </div>
            <div className="testimonial-item">
              <p className="text-lg">{responsibility}</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div className="portfolio-info">
            <h3 className="text-2xl">Project information</h3>
            <ul className="flex flex-col gap-2 mt-4">
              <li className="mb-4">
                <strong>Project URL</strong>{" "}
                <a href={`${projectLink}`}>{projectLink}</a>
              </li>
              <Link
                href={`${projectLink}`}
                className="bg-blue-600 w-[150px] flex justify-center px-4 py-3 cursor-pointer rounded-full text-white "
              >
                Visit Website
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailCard;
