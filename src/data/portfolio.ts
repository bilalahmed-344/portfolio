import Image from "next/image";
import React from "react";
import statsImage from "../../public/assets/img/stats-bg.jpg";
import redwave from "../../public/assets/icons/RED 1.svg";
import redchain from "../../public/assets/icons/redchainn 1.svg";
import shabaz from "../../public/assets/icons/shahbazPay.svg";
import easy from "../../public/assets/icons/easy 1.svg";
import shape from "../../public/assets/icons/shape 1.svg";
import frosty from "../../public/assets/icons/Frosty_Metrics.38b015f8 1.svg";
import nadine from "../../public/assets/icons/nadine.svg";
import tie from "../../public/assets/icons/the tie 1.svg";
import market from "../../public/assets/icons/market pro 1.svg";
import quick from "../../public/assets/icons/quick card 1.svg";

export const portfolio = [
  {
    id: 1,
    title: "Red Wave",
    cardImg: redwave,
    shortDescription: " USA funding platform",
    bgColor: "#FF9696",
  },
  {
    id: 2,
    title: "Nadine Logistic",
    cardImg: nadine,
    shortDescription: "Freight delivery SAAS platform",
    bgColor: "black",
    caroselImg: [redwave, shabaz, nadine, tie],
  },
  {
    id: 3,
    title: "Quick Card",
    cardImg: quick,
    shortDescription: "Blockchain-based payment infrastructure",
    bgColor: "#FEBE10",
  },
  {
    id: 4,
    title: "Cointelegraph Markets Pro",
    cardImg: market,
    shortDescription: "easy-to-use dashboard",
    bgColor: "black",
  },
  {
    id: 5,
    title: "Rechain",
    cardImg: redchain,
    shortDescription: "manage your product development , production",
    bgColor: "#A0D4FF",
  },
  {
    id: 6,
    title: "Frosty Metrics",
    cardImg: frosty,
    shortDescription: "Informational dashboard ",
    bgColor: "#0D1A37",
  },
  {
    id: 7,
    title: "Shabaaspay",
    cardImg: shabaz,
    shortDescription: "Invoicing, Review and Payment App",
    bgColor: "#5FB7FF",
  },
  {
    id: 8,
    title: "Easy Pay Direct",
    cardImg: easy,
    shortDescription: "Payment processing platform ",
    bgColor: "#239F4C",
  },
  {
    id: 9,
    title: "Shape Connect",
    cardImg: shape,
    shortDescription: "Connects your business with the right solutions.",
    bgColor: "#2F73C1",
  },
];

// bg-[#239F4C]
// bg-[#0D1A37]
// bg-black
// bg-black
// bg-[#FEBE10]
