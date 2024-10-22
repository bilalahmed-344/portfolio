import React from "react";
import { portfolio } from "@/data/portfolio";
import { portfolioDetail } from "@/data/portfolioDetail";
import PortfolioDetailCard from "@/app/_components/cards/PortfolioDetailCard";

interface portfolioId {
  params: {
    id: string;
  };
}

const page = ({ params }: portfolioId) => {
  const portfolioId = parseInt(params.id, 10);

  const portfolioCardNo = portfolio.find(
    (service) => service.id === portfolioId
  );

  const portfolioData = portfolioDetail.find(
    (detail) => detail.id === portfolioId
  );

  return (
    <div>
      <PortfolioDetailCard
        carouselImage={portfolioData?.caroselImg}
        bgColor={portfolioData?.bgColor}
        detailTitle={portfolioData?.detailTitle}
        detailDescription={portfolioData?.detailDescription}
        category={portfolioData?.category}
        projectLink={portfolioData?.url}
        responsibility={portfolioData?.responsibility}
      />
    </div>
  );
};

export const generateStaticParams = async () => {
  return portfolio.map((item) => ({
    id: item.id.toString(),
  }));
};

export default page;
