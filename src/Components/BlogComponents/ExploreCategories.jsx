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
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper/modules";

const ExploreCategoryList = ({ items }) => {
  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Explore Our Categories</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard
        ]}
        mousewheel={true}
        keyboard={true}
        // scrollbar={{ draggable: true }}
        cssMode={true}
        className="mySwiper"
        breakpoints={{
          340: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="category-item flex flex-col items-start bg-white rounded-lg shadow-lg p-6 border border-gray-300 hover:shadow-xl transition-shadow duration-300">
              <img
                src={item.icon}
                alt={item.altText}
                className="w-10 h-11 object-contain"
              />
              <h3 className="text-center mt-2 my-2 font-bold">
                {item.altText}
              </h3>
              <p className="text-center my-2 text-gray-600 break-words hyphens-auto">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export const items = [
  {
    icon: news,
    altText: "Crypto News",
    description: "Crypto News and Updates",
  },
  {
    icon: Market,
    altText: "Market Analysis",
    description: "Market Analysis and Trends",
  },
  {
    icon: investment,
    altText: "Investment Strategies",
    description: "Investment Strategies",
  },
  {
    icon: Guides,
    altText: "Guides and Tutorials",
    description: "Guides and Tutorials",
  },
  { icon: Security, altText: "Security Tips", description: "Security Tips" },
  {
    icon: Features,
    altText: "New Features",
    description: "New Features and Updates",
  },
  { icon: Studies, altText: "Case Studies", description: "Case Studies" },
  {
    icon: Spotlight,
    altText: "Community Spotlight",
    description: "Community Spotlight",
  },
  {
    icon: Interviews,
    altText: "Interviews",
    description: "Interviews and Expert Opinions",
  },
  {
    icon: Issues,
    altText: "Legal Issues",
    description: "Legal and Regulatory Issues",
  },
  {
    icon: Education,
    altText: "Cryptocurrency Education",
    description: "Cryptocurrency Education",
  },
  {
    icon: Future,
    altText: "Future of Crypto",
    description: "Future of Cryptocurrency",
  },
];

export default ExploreCategoryList;
