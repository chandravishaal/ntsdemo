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




/*
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
   {/*} <img src={icon} alt={description} className="h-4 w-4 mr-2" />*
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

export default BlogList;*/


import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../../index.css';
import blogMainImg from '../../assets/Images/Blog/blogMain.png';
import profile from '../../assets/Images/Blog/userIcon.png';
import comments from '../../assets/Images/Blog/commentsIcon.png';
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const BlogListSection = () => {

  const blogPosts = [
    {
      title: "The Future of Technology",
      banner: "https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=2048x2048&w=is&k=20&c=ocYlO-ILbQNIpV70O32Ja3P4kMLi9_Yj-78Xrf-Y6L8=",
      description: "Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt id itaque tempore iste ratione quod placeat officia. Iusto libero voluptatibus quis. ",
      content: [
        "Technology is evolving at an unprecedented pace.",
        "From AI to quantum computing, the possibilities are endless.",
        "It's crucial to stay informed about these advancements."
      ],
      readTime: 5,
      author: {
        name: "Jane Doe",
        imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
      },
      activity: {
        likes: 150,
        dislikes: 5
      },
      createdAt:
        "3hrs ago"
      ,
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a0",
          name: "Technology"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a1",
          name: "Innovation"
        }
      ]
    },
    {
      title: "Healthy Living: Tips and Tricks",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Simple tips for a healthier lifestyle.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: [
        "Incorporating fruits and vegetables into your diet is essential.",
        "Regular exercise can greatly improve your health.",
        "Mental well-being is just as important as physical health."
      ],
      readTime: 4,
      author: {
        name: "John Smith",
        imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
      },
      activity: {
        likes: 85,
        dislikes: 2
      },

      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a2",
          name: "Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a3",
          name: "Wellness"
        }
      ],
      createdAt: "6hrs ago"
    },
    {
      title: "Traveling on a Budget",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg",
      description: "How to explore the world without breaking the bank.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: [
        "Researching your destination can save you money.",
        "Travel during off-peak seasons to find better deals.",
        "Consider hostels or vacation rentals as accommodations."
      ],
      readTime: 6,
      author: {
        name: "Alice Johnson",
        imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
      },
      activity: {
        likes: 120,
        dislikes: 1
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a4",
          name: "Travel"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a5",
          name: "Budgeting"
        }
      ],
      createdAt: "8hrs ago"
    },
    {
      title: "Mastering the Art of Cooking",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Na-_QCEsWqQbEAFdj9OoeA.jpeg",
      description: "Tips for becoming a better cook at home.Exploring the innovations that will shape our future.,Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      content: [
        "Start with simple recipes to build your confidence.",
        "Experiment with spices to enhance flavors.",
        "Always taste your food as you cook."
      ],
      readTime: 3,
      author: {
        name: "Bob Brown",
        imageUrl: "https://media.istockphoto.com/id/1330206844/photo/shot-of-a-young-businessman-at-work.jpg?s=2048x2048&w=is&k=20&c=YbduWEz8AT5Sqs9w8NsDysE4dwDaWPs1d0qApq-xFhk="
      },
      activity: {
        likes: 95,
        dislikes: 0
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a6",
          name: "Cooking"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a7",
          name: "Food"
        }
      ],
      createdAt: "1day ago"
    },
    {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L7tpgNK6Rg_09CBXJIp3sQ.jpeg",
      description: "Understanding mental health and its significance.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ],
      createdAt: "20.09.2024"
    },
    {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*4EK7Nug1n3bCOVoniFXo9Q.jpeg",
      description: "Understanding mental health and its significance.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ],
      createdAt: "20.09.2024"
    },
    {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Understanding mental health and its significance.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ]
    }, {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ],
      createdAt: "20.09.2024"
    }, {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ],
      createdAt: "20.09.2024"
    }, {
      title: "The Importance of Mental Health",
      banner: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*L8T-mS-GqCJiX0RLT1QhIA.png",
      description: "Understanding mental health and its significance.,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat enim omnis iusto ab voluptatem necessitatibus consequatur non aperiam.",
      content: [
        "Mental health affects how we think, feel, and act.",
        "It's important to seek help when needed.",
        "Practicing mindfulness can improve your mental well-being."
      ],
      readTime: 5,
      author: {
        name: "Emma Wilson",
        imageUrl: profile
      },
      activity: {
        likes: 200,
        dislikes: 3
      },
      categories: [
        {
          id: "60d1d5e4f1a2b9299f40f0a8",
          name: "Mental Health"
        },
        {
          id: "60d1d5e4f1a2b9299f40f0a9",
          name: "Self-Care"
        }
      ],
      createdAt: "20.09.2024"
    }
  ];

  useEffect(() =>{
    //gsap animation for main blog
    gsap.from(".blog", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger:{
        trigger:".blog",
        start: "top 80%",
        toggleActions:"play none none reverse",
      }
    });

    //gsap animation for browse all blog button
    gsap.from(".browse-btn", {
      y:200,
      opacity:0,
      duration: 1.5,
      ease: "power2.out"
    })
  },[])

  return (
    <div className="w-full bg-gray-50 py-8 px-4 sm:px-8">
      <div className="container mx-auto ">
        <h1 className="blog text-3xl sm:text-5xl font-semibold text-center mb-10 sm:mb-14 font-montserrat">
          Blogs
        </h1>

        <div className="blog flex flex-col lg:flex-row gap-8 overflow-hidden shadow-lg relative bg-gradient-to-t from-gray/70 to-transparent rounded-xl ">
          {/* Main Blog Section */}
          <div className="relative w-full lg:w-[50%]  lg:h-[39.6rem] mb-10 lg:mb-0 flex flex-col rounded-xl overflow-hidden ">
            <img
              src={blogPosts[0].banner}
              alt={`Main Blog - ${blogPosts[0].title}`}
              className="w-full h-[420px] md:h-full object-cover rounded-xl transition ease-out duration-300 transform hover:scale-105 cursor-pointer"
            />

            <div className="absolute bottom-8 left-0 w-full p-4 overflow-hidden shadow-lg">
              <div className="flex items-center text-white mb-[-5]">
                <img
                  src={blogPosts[0].author.imageUrl}
                  alt={`${blogPosts[0].author.name} Profile`}
                  className="w-8 h-8 mr-2 rounded-full object-cover "
                />
                <span className="text-sm md:text-lg font-bold whitespace-nowrap">By - {blogPosts[0].author.name || 'Admin'}</span>
                <span className='text-sm md:text-lg mx-2 font-bold whitespace-nowrap'>.</span>
                <span className='text-sm md:text-lg whitespace-nowrap mb-[-5]'>{blogPosts[0].createdAt}</span>
                <div className="rounded-xl flex items-center gap-2 p-1 px-2 text-sm ml-2">
                  <span className="text-primaryCyan">
                    <FaHeart />
                  </span>
                  <h1>{blogPosts[0].activity.likes}</h1>
                </div>
                <div className="text-lg text-gray-200 flex items-center ml-auto hidden sm:flex">
                  <span className="mr-1"><MdOutlineTimer /></span>
                  <span className="ml-auto">{blogPosts[0].readTime} m</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white">{blogPosts[0].title}</h2>
              <p className="text-gray-200 mb-4 text-lg font-century-gothic line-clamp-3">{blogPosts[0].description}</p>
              <Link to={blogPosts[0].link} className="text-primaryCyan font-semibold twxt-lg">
                Read More...
              </Link>
            </div>
          </div>

          {/* Blog List Section */}
          <div className="w-full lg:w-[50%] flex flex-col  items-center gap-4">
            {blogPosts.slice(1, 4).map((post, index) => (
              <div key={index} className="border border-gray-300 rounded-xl mb-4 transition-transform duration-200 overflow-hidden h-[400px] md:h-[190px] ">
                <Link to={post.link} className="flex flex-col md:flex-row h-full ">
                  {/* Image on top for mobile, left for desktop */}
                  <img
                    src={post.banner}
                    alt={post.title}
                    className="w-full md:w-[210px] h-[220px] md:h-full object-cover transition ease-out duration-300 transform hover:scale-105 cursor-pointer"
                  />
                  <div className="flex flex-col justify-between p-4 gap-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className='text-md font-century-gothic text-primaryCyan font-bold'>Cryptocurrency</span>
                        <span className="text-sm text-gray-600">{post.createdAt}</span>
                      </div>
                      <h1 className="font-bold text-xl sm:text-2xl line-clamp-1">{post.title}</h1>
                      <p className="text-gray-600 mb-2 line-clamp-2 font-century-gothic ">{post.description}</p>
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <img src={post.author.imageUrl} alt="Profile" className="w-4 h-4 rounded-full mr-2 object-cover" />
                        <span className='text-sm font-century-gothic text-gray-600 font-bold'>{post.author.name}</span>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <span className="mr-1"><MdOutlineTimer /></span>
                        <span className="text-gray-600">{post.readTime} m</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Button to browse all posts */}
      <div className="text-center mt-9 mb-9">
        <button className="bg-primaryCyan text-white px-4 py-2 text-2xl rounded-md transition-transform transform hover:-translate-y-1 duration-200 ease-linear">
          Browse all Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogListSection;




