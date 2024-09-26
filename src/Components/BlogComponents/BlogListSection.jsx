/*import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../index.css';
import blogMainImg from '../../assets/Images/Blog/blogMain.png'; 
import blogImg1 from '../../assets/Images/Blog/blogImg1.png'; 
import blogImg2 from '../../assets/Images/Blog/blogImg2.png';
import blogImg3 from '../../assets/Images/Blog/blogImg3.png'; 
import profilePic from '../../assets/Images/Blog/profilePic.png'; 
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const BlogListSection = () => {
  const swiperRef = useRef(null); // Reference for the swiper section
  const slides = useRef([]); // Reference for slides

  useEffect(() => {
    if (slides.current) {
      gsap.fromTo(
        slides.current,
        {
          opacity: 0,
          y: 100, // Start position for middle slide
          x: (i) => (i % 3 === 0 ? -100 : i % 3 === 2 ? 100 : 0), // Adjust direction (left, middle, right)
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 4,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: swiperRef.current, // Animation starts when Swiper is in view
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  return (
    <div className="w-full bg-cyan-50 jost-uniquifier py-16 px-4 sm:px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-5xl font-semibold text-left mb-10 sm:mb-14 font-montserrat">
          Our Latest Blogs
        </h1>

        <div className="flex flex-col lg:flex-row justify-between" ref={swiperRef}>
          {/* Main Blog Left Section 
          <div className="w-full lg:w-[600px] lg:pr-8 mb-10 lg:mb-0" ref={(el) => (slides.current[0] = el)}>
            <img 
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*L7tpgNK6Rg_09CBXJIp3sQ.jpeg"
              alt="Main Blog" 
              className="w-full h-auto rounded-lg mb-[-2%]"
            />
            <div className="flex items-center text-cyan-600 px-2 text-base sm:text-lg mb-[16%] ">
              <span className="flex items-center mr-[10%] mb-[-16%] ">
                <img src={profile} className="w-[20%] h-[20%] lg:w-[25%] lg:h-[25%] mr-[4%] font-century-gothic" />
                <h1 className="whitespace-nowrap text-xs md:text-sm">
                  By - Admin
                </h1>
              </span>
              <span className="flex items-center lg:ml-[-6%] mb-[-16%] ml-[-10%] font-century-gothic">
                <img src={comments} className="w-[20%] h-[20%] lg:w-[25%] lg:h-[25%] mr-[3%]" />
                <h1 className="whitespace-nowrap text-xs md:text-sm">
                  0 comments
                </h1>
              </span>
              <h4 className="ml-auto text-black mb-[-16%] font-century-gothic">6 minute read</h4>
            </div>

            <div className="flex items-center mt-[5%] mb-[4%]">
              <img 
                src={profilePic} 
                alt="Amit Chakraborty" 
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" 
              />
              <div>
                <h4 className="font-bold text-lg font-montserrat">Amit Chakraborty</h4>
                <p className="text-cyan-600 text-sm sm:text-base font-montserrat">Crypto Trader</p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold mb-4 font-century-gothic">
            Buy and Sell Crypto: Functions and Benefits of Binance Coin
            </h2>
            <p className="text-gray-700 text-sm sm:text-base mb-6 text-justify font-century-gothic ">
            Explore how to buy and sell crypto using Binance Coin. Learn about its burn mechanism, benefits, and role in top crypto exchanges like Binance.
            </p>
            <Link to="https://medium.com/@ntsmetrics/buy-and-sell-crypto-functions-and-benefits-of-binance-coin-2090e666eb5e" className="text-cyan-600 font-semibold inline-block">
              Read More...
            </Link>
          </div>

          {/* Blog List Right Section 
          <div className="w-full lg:w-[50%] mr-[1%] text-justify">
            

            {/* Blog Item 2 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[2] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*58VfCFFISe7eaCdtWTCi0g.jpeg"
                alt="Blog 2" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/crypto-exchanges-key-predictions-for-the-crypto-market-bf963f321f43" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Crypto Exchanges: Key Predictions for the Crypto Market
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                The second half of September 2024 will be extremely determinant for the cryptocurrency market.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">5 minute read</span>
                </p>
              </div>
            </div>


            {/* Blog Item 3 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[3] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png"
                alt="Blog 3" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/crypto-exchanges-how-they-are-revolutionizing-global-trade-f3ffa34a806c" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Crypto Exchanges: How They Are Revolutionizing Global Trade
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                Cryptocurrency has become a buzzword in the world of finance, with its influence rapidly spreading across different sectors of the economy.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">8 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 3 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[3] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg"
                alt="Blog 3" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/crypto-exchanges-how-they-are-revolutionizing-global-trade-d919f01a58d1" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Crypto Exchanges: How They Are Revolutionizing Global Trade
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                Cryptocurrency has become a buzzword in the world of finance, with its influence rapidly spreading across different sectors of the economy.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">7 minute read</span>
                </p>
              </div>
            </div>

            {/* Blog Item 4 *
            <div className="flex items-start mb-8" ref={(el) => (slides.current[4] = el)}>
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Na-_QCEsWqQbEAFdj9OoeA.jpeg" 
                alt="Blog 4" 
                className="w-[28%] h-[18%] sm:w-[38%] sm:h-[28%] object-cover rounded-lg mr-4 flex-[0.2]" 
              />
              <div className="flex-[0.8]">
                <Link to="https://medium.com/@ntsmetrics/buy-crypto-studying-the-link-between-crypto-and-ai-7976d14e88db" className="font-bold text-sm sm:text-lg mb-2 font-century-gothic">
                Buy Crypto: Studying the Link Between Crypto and AI
                </Link>
                <p className="text-gray-600 text-sm sm:text-base mb-2 font-century-gothic line-clamp-2">
                Buy Crypto and explore the synergy between AI and cryptocurrency investment. Learn how AI is reshaping the landscape on top crypto exchanges.
                </p>
                <p className="text-cyan-600 text-sm sm:text-base font-century-gothic">
                  Trading | <span className="text-black font-century-gothic">4 minute read</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListSection;*/





import { useEffect, useRef } from 'react';
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from "react-router-dom";

import news from '../../assets/Images/Blog/icon1.png';
import Market from '../../assets/Images/Blog/icon2.png';
import investment from '../../assets/Images/Blog/icon3.png';
import Guides from '../../assets/Images/Blog/icon4.png';
import Security from '../../assets/Images/Blog/icon5.png';
import Features from '../../assets/Images/Blog/icon6.png';
import Studies from '../../assets/Images/Blog/icon7.png';
import Spotlight from '../../assets/Images/Blog/icon8.png';
import Interviews from '../../assets/Images/Blog/icon9.png';
import Issues from '../../assets/Images/Blog/icon10.png';
import Education from '../../assets/Images/Blog/icon11.png';
import Future from '../../assets/Images/Blog/icon12.png';

gsap.registerPlugin(ScrollTrigger);

const EachBlog = ({ title, date, likes, description, imageUrl }) => {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl bg-white p-2 outline outline-[0.2px] outline-gray-300 shadow-md">
      <h1 className="text-lg font-semibold px-1">{title}</h1>
      <div className="flex items-center px-1 gap-3">
        <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm outline whitespace-nowrap outline-[0.2px] outline-gray-300">
          <span className="text-primaryCyan">
            <CiCalendarDate size={15} />
          </span>
          <h1>{date}</h1>
        </div>
        <div className="rounded-xl flex items-center gap-2 bg-[#F3F4F6] p-1 px-2 text-sm outline outline-[0.2px] outline-gray-300">
          <span className="text-primaryCyan">
            <FaHeart />
          </span>
          <h1>{likes}</h1>
        </div>
      </div>
      <h1 className="line-clamp-2 text-sm px-1">{description}</h1>

      <div className="relative">
        <img
          src={imageUrl}
          className="w-full object-cover h-[300px] rounded-xl z-40"
          alt={title}
        />
        <div className="bg-white pr-2 pb-2 pt-1 absolute z-50 top-0 left-0 rounded-br-xl">
          <div className="bg-white group hover:bg-[#F3F4F6] transition-all duration-300 p-3 outline outline-[2px] rounded-xl outline-gray-400">
            <Link to="/" className="flex items-center">
              Read Article
              <span className="group-hover:translate-x-1 transition-transform duration-300 ml-2 text-primaryCyan">
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};


const CategoryList = ({ description, icon }) => (
  <button className="w-full category-list flex items-center justify-center p-2 rounded-full border-2 border-black bg-white hover:bg-primaryCyan transition">
   {/*} <img src={icon} alt={description} className="h-4 w-4 mr-2" />*/}
    <span className='font-century-gothic whitespace-nowrap font-bold'>{description}</span>
  </button>
);


const BlogList = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const slides = swiperRef.current?.querySelectorAll('.swiper-slide');

    if (slides) {
      gsap.fromTo(
        slides,
        {
          opacity: 0,
          y: 100,
          x: (i) => (i % 3 === 0 ? -100 : i % 3 === 2 ? 100 : 0),
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: swiperRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, []);

  const blogPosts = [
    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },
    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    }, {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    }, {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },
    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },
    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },

    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },

    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },

    {
      title: "Data Analytics: Key to Decision and Business Growth",
      banner: "https://images.unsplash.com/photo-1610194352335-82d06f0c94e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Data is the new currency of the digital age. Data insight holds the key to unlocking a new era of business growth and success.",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "admin"
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ],
      createdAt: "20.09.2024"
    },
  ];


  const categories = [

    { icon: news, altText: "Crypto News", description: "Crypto News and Updates" },
    { icon: Market, altText: "Market Analysis", description: "Market Analysis and Trends" },
    { icon: investment, altText: "Investment Strategies", description: "Investment Strategies" },
    { icon: Security, altText: "Security Tips", description: "Security Tips" },
    { icon: Studies, altText: "Case Studies", description: "Case Studies" },
    { icon: Interviews, altText: "Interviews", description: "Interviews and Expert Opinions" },
    { icon: Issues, altText: "Legal Issues", description: "Legal and Regulatory Issues" },
    { icon: Education, altText: "Cryptocurrency Education", description: "Cryptocurrency Education" },
    { icon: Future, altText: "Future of Crypto", description: "Future of Cryptocurrency" },
   


  ];


  return (
    <section className="pb-10 pt-10 bg-[#e0ffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold ">Our Latest Blog</h1>
        </div>
        <div className='flex flex-row gap-6 mb-10'>
          {categories.slice(0, 5).map((category, index) => (
            <CategoryList key={index} description={category.description} icon={category.icon} />
          ))}
        </div>
        ,
        <Swiper
          ref={swiperRef}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pauseOnHover={true}
        >
          {blogPosts.slice(0, 6).map((post, index) => (
            <SwiperSlide key={index}>
              <EachBlog
                title={post.title}
                date={post.createdAt}
                likes={post.activity.likes}
                description={post.description}
                imageUrl={post.banner}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BlogList;




