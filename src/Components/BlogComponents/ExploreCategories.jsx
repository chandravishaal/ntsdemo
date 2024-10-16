import news from "../../assets/Images/Blog/icon1.png";
import Market from "../../assets/Images/Blog/icon2.png";
import investment from "../../assets/Images/Blog/icon3.png";
import Guides from "../../assets/Images/Blog/icon4.png";
import Security from "../../assets/Images/Blog/icon5.png";
import Features from "../../assets/Images/Blog/icon6.png";
import Studies from "../../assets/Images/Blog/icon7.png";
import Spotlight from "../../assets/Images/Blog/icon8.png";
import Interviews from "../../assets/Images/Blog/icon9.png";
import Issues from "../../assets/Images/Blog/icon10.png";
import Education from "../../assets/Images/Blog/icon11.png";
import Future from "../../assets/Images/Blog/icon12.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Mousewheel } from "swiper/modules";

const ExploreCategoryList = ({ items }) => {
  return (
    <section className="container mx-auto my-12 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-12 whitespace-pre-line">
        Explore Our Featured <span className="block">Categories</span>
      </h2>

      <Swiper
        modules={[Pagination, Mousewheel]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        mousewheel={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-start bg-gray-50 rounded-3xl shadow-3xl p-8 border border-gray-300 hover:shadow-xl transition-shadow duration-300 w-full h-[300px]">
              <img src={item.icon} alt={item.altText} className="w-10 h-11" />
              <h2 className=" text-gray-700 text-left text-2xl mt-2 my-2 font-bold font-montserrat cursor-pointer transition-colors duration-300 hover:text-blue-500 md:hover:text-blue-500">
                {item.altText}
              </h2>
              <p className="text-left my-2 text-gray-600 font-century-gothic break-words hyphens-auto">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-pagination {
          margin-bottom: -10px !important;
        }
          .swiper-pagination-bullet{
            width: 10px !important
          }
      `}</style>
    </section>
  );
};

export const items = [
  {
    icon: news,
    altText: "Crypto News",
    description:
      "Stay updated with the latest news\nabout cryptocurrencies.\nFind out what’s trending!",
  },
  {
    icon: Market,
    altText: "Market Analysis",
    description:
      "Analyze market trends\nand insights to make informed\ndecisions on your investments.",
  },
  {
    icon: investment,
    altText: "Investment Strategies",
    description:
      "Explore effective investment\nstrategies for maximizing your\nreturns in the crypto space.",
  },
  {
    icon: Guides,
    altText: "Guides and Tutorials",
    description:
      "Access comprehensive guides\nand tutorials to enhance your\nunderstanding of cryptocurrency.",
  },
  {
    icon: Security,
    altText: "Security Tips",
    description:
      "Learn about best practices\nfor keeping your crypto assets\nsafe and secure.",
  },
  {
    icon: Features,
    altText: "New Features",
    description:
      "Discover new features and\nupdates to improve your\ncryptocurrency experience.",
  },
  {
    icon: Studies,
    altText: "Case Studies",
    description:
      "Review detailed case studies\nthat highlight successful\nstrategies in cryptocurrency.",
  },
  {
    icon: Spotlight,
    altText: "Community Spotlight",
    description:
      "Shine a light on community\ninitiatives and stories that\ninspire crypto enthusiasts.",
  },
  {
    icon: Interviews,
    altText: "Interviews",
    description:
      "Gain insights from experts\nthrough exclusive interviews\ncovering key topics.",
  },
  {
    icon: Issues,
    altText: "Legal Issues",
    description:
      "Understand the legal\nand regulatory issues\nimpacting the cryptocurrency market.",
  },
  {
    icon: Education,
    altText: "Cryptocurrency Education",
    description:
      "Educate yourself on\ncryptocurrency fundamentals\nand emerging trends.",
  },
  {
    icon: Future,
    altText: "Future of Crypto",
    description:
      "Explore predictions and insights\non the future of cryptocurrency\nand blockchain technology.",
  },
];

export default ExploreCategoryList;
