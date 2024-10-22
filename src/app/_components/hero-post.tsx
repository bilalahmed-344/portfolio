"use client"
import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";
import Image from "next/image";
import bgphoto from "../../../public/assets/img/bilalBbhaiImg.jpg"
import {useTypewriter, Cursor} from "react-simple-typewriter"

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  const [text] = useTypewriter({
    words: [  "Developer", "Freelancer", "Coder"],
    loop: true,  
    delaySpeed: 1000,  
    // typeSpeed: 50,  
    deleteSpeed: 30,
  });
  return (
    <section id="hero" className="hero section dark-background">

    <Image src={bgphoto} alt="" data-aos="fade-in"/>

    <div className="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up" data-aos-delay="100">
      <h2>I am Bilal Ahmad</h2>
      <p>
        {/* <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span> */}
        <span>
          {text}
        </span>
        <Cursor/>
        </p>
    </div>

  </section>
  );
}
