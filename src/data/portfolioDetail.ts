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
import project1 from "../../public/assets/img/portfolioDetail/Screenshot (141).png";
import project2 from "../../public/assets/img/portfolioDetail/Screenshot (142).png";
import project3 from "../../public/assets/img/portfolioDetail/Screenshot (143).png";
import project4 from "../../public/assets/img/portfolioDetail/Screenshot (144).png";
import project5 from "../../public/assets/img/portfolioDetail/Screenshot (162).png";
import project6 from "../../public/assets/img/portfolioDetail/Screenshot (163).png";
import project7 from "../../public/assets/img/portfolioDetail/Screenshot (164).png";
import project8 from "../../public/assets/img/portfolioDetail/Screenshot (165).png";
import project9 from "../../public/assets/img/portfolioDetail/Screenshot (145).png";
import project10 from "../../public/assets/img/portfolioDetail/Screenshot (146).png";
import project11 from "../../public/assets/img/portfolioDetail/Screenshot (147).png";
import project12 from "../../public/assets/img/portfolioDetail/Screenshot (148).png";
import project13 from "../../public/assets/img/portfolioDetail/Screenshot (149).png";
import project14 from "../../public/assets/img/portfolioDetail/Screenshot (150).png";
import project15 from "../../public/assets/img/portfolioDetail/Screenshot (151).png";
import project16 from "../../public/assets/img/portfolioDetail/Screenshot (152).png";
import project17 from "../../public/assets/img/portfolioDetail/Screenshot (154).png";
import project18 from "../../public/assets/img/portfolioDetail/Screenshot (155).png";
import project19 from "../../public/assets/img/portfolioDetail/Screenshot (156).png";
import project20 from "../../public/assets/img/portfolioDetail/Screenshot (157).png";
import project21 from "../../public/assets/img/portfolioDetail/Screenshot (158).png";
import project22 from "../../public/assets/img/portfolioDetail/Screenshot (159).png";
import project23 from "../../public/assets/img/portfolioDetail/Screenshot (160).png";
import project24 from "../../public/assets/img/portfolioDetail/Screenshot (161).png";
import project25 from "../../public/assets/img/portfolioDetail/ss (6).png";
import project26 from "../../public/assets/img/portfolioDetail/ss (7).png";
import project27 from "../../public/assets/img/portfolioDetail/ss (8).png";
import project28 from "../../public/assets/img/portfolioDetail/ss (9).png";
import project29 from "../../public/assets/img/portfolioDetail/ss (2).png";
import project30 from "../../public/assets/img/portfolioDetail/ss (3).png";
import project31 from "../../public/assets/img/portfolioDetail/ss (4).png";
import project32 from "../../public/assets/img/portfolioDetail/ss (5).png";
import project33 from "../../public/assets/img/portfolioDetail/ss (9).png";
import project34 from "../../public/assets/img/portfolioDetail/ss (10).png";
import project35 from "../../public/assets/img/portfolioDetail/ss (11).png";
import project36 from "../../public/assets/img/portfolioDetail/ss (12).png";
export const portfolioDetail = [
  {
    id: 1,
    caroselImg: [project1, project2, project3, project4],
    detailTitle: "Redwave",
    detailDescription: "A platform for managing campaigns and contributions",
    responsibility:
      "Developed the backend with NestJS and PostgreSQL. Deployed the application on AWS using Docker. Integrated features like Elasticsearch and Schedular to enhance scalability and performance. Collaborated with stakeholders and frontend developers throughout the development process.",
    category: "Web Design",
    bgColor: "#FF9696",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://www.redwave.fund/",
  },
  {
    id: 2,
    caroselImg: [project5, project6, project7, project8],
    detailTitle: "Nadine logistics",
    detailDescription:
      "A platform which provides transportation and logistics . Providing customized ground freight transportation and supply chain solutions to companies worldwide..",
    responsibility:
      "Developed dynamic and responsive user interfaces using ReactJs and Ruby on Rails, handling the backend architecture from scratch and contributing to frontend components. I focused on optimizing API performance by moving time-consuming processes to background tasks, which significantly improved response times and overall application efficiency.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://techify-solutions.netlify.app/",
  },
  {
    id: 3,
    caroselImg: [project9, project10, project11, project12],
    detailTitle: "QuickCard",
    detailDescription:
      "A blockchain-secure checkout experience for your customers, and an effective batch settlement solution for your business all in one platform.",
    responsibility:
      "Worked on Quickcard using Ruby on Rails Framework. Revamp complete Merchant dashboard for better user-interface. Integrated multiple payment gateways, Added load-balancer, so payments wouldn’t fails for any reason. Added Fee module for fees will be splited againt merchant, Agents & ISOs. Integrated hosted checkout page, developed invoices system, build reporting module & many more.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://quickcard.me/",
  },
  {
    id: 4,
    caroselImg: [project13, project14, project15, project16],
    detailTitle: "Cointelegraph Markets Pro",
    detailDescription:
      "Platform to get real-time alerts about market events known to move cryptocurrency prices.",
    responsibility:
      "Integrated GhostAPI for fetching academic data, Integrated Lightweight chart to show trading data, Revamp existing components for better look and feel. Added Subscription module using Stripe. Developed all RESTAPIs that were needed to create an mobile app.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://subscriptions.cointelegraph.com/",
  },
  {
    id: 5,
    caroselImg: [project17, project18, project19, project20],
    detailTitle: "Rechain",
    detailDescription:
      "Rechain CRM lets you easily manage your product development, production, quality inspections & more.",
    responsibility:
      "I was responsible for developing and maintaining scalable web applications using Vue.js for dynamic user interfaces and Ruby on Rails for server-side logic. I designed and optimized PostgreSQL database schemas to ensure data integrity and performance. My role involved creating and integrating RESTful APIs, implementing robust authentication solutions, and ensuring application responsiveness and cross-browser compatibility",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://rechain.co",
  },
  {
    id: 6,
    caroselImg: [project21, project22, project23, project24],
    detailTitle: "Frosty Metrics",
    detailDescription:
      "Dashboard for Avalanche’s Games, Defi, NFTs & EcoSystem",
    responsibility:
      "Developed this beautiful & responsive dashboard for Avalanche Ecosystem. My responsibilities included to build this dashboard from scratch, add Tables for Gaming, DeFi & NFTs, Added Charts for better visualization of Ecosystem data.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://frostymetrics.com/",
  },
  {
    id: 7,
    caroselImg: [project25, project26, project27, project28],
    detailTitle: "Frosty Metrics",
    detailDescription:
      "Next-Gen Fintech App Easy Invoicing, Review and Payment App, Direct From Your Smartphone",
    responsibility:
      "I worked with a startup as a Backend Developer where I designed and developed a robust backend system using Ruby on Rails and PostgreSQL. I integrated multiple payment processors to ensure real-time transactions and deployed the project on AWS using Docker containers. To ensure scalability and performance, I implemented AWS RDS, load balancers, Sidekiq, and various third-party services. Additionally, I developed a business verification module using React and Tailwind CSS.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://www.shabaas.com/",
  },
  {
    id: 8,
    caroselImg: [project29, project30, project31, project32],
    detailTitle: "Frosty Metrics",
    detailDescription:
      "Payment processing platform for high, medium, and low risk businesses",
    responsibility:
      "As a Front End Developer, I developed dynamic and responsive user interfaces using Vue.js. My responsibilities included developing new features, optimizing existing components for performance, and ensuring cross-browser compatibility. I worked closely with designers to translate UI/UX wireframes into interactive and visually appealing web applications. My role also involved collaborating with back-end developers to integrate RESTful APIs and ensure seamless data flow across the application.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://www.shapeconnect.com/",
  },
  {
    id: 9,
    caroselImg: [project33, project34, project35, project36],
    detailTitle: "Frosty Metrics",
    detailDescription:
      "A platform which connects your business with the right solutions.",
    responsibility:
      "Developed dynamic and responsive user interfaces using Nuxt Js. My responsibilities included developing new features, optimizing existing components for performance and integrated RESTful APIs and ensure seamless data flow across the application.",
    category: "Web Design",
    bgColor: "#A0D4FF",
    client: "Asu company",
    date: "01 March , 2020",
    url: "https://www.easypaydirect.com/",
  },
];
