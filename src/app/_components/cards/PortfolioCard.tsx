import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdMore } from "react-icons/io";

interface PortfolioCardProp {
  cardImg?: string;
  title?: string;
  description?: string;
  bgColor?: string;
  id?: number;
  caroselImg?: any[];
}

const PortfolioCard: React.FC<PortfolioCardProp> = ({
  cardImg,
  title,
  description,
  bgColor,
  id,
  caroselImg,
}) => {
  return (
    <div
      className={`relative flex flex-col justify-center border-none h-[185px] sm:h-[330px]  w-[30%] overflow-hidden transition-all duration-300 group rounded-[20px] mb-4`}
    >
      <Link href={`/portfolio/${id}`} className="w-full h-full">
        <div
          className="h-full w-full flex justify-center items-center "
          style={{ backgroundColor: bgColor }}
        >
          <Image
            src={cardImg || ""}
            className="object-cover "
            alt={title || "Portfolio Image"}
          />
        </div>

        <div className="bg-white absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full transition-transform duration-500 ease-in-out group-hover:-translate-y-4 z-10 w-[93%] mx-auto bg-opacity-15 flex justify-between">
          <div>
            <p className="text-black font-semibold ">{title}</p>
            <p className="text-black">{description}</p>
          </div>
          <div className="flex justify-center items-center hover:cursor-pointer">
            <Link href={`/portfolio/${id}`}>
              <IoMdMore color="black " size={23} />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;
