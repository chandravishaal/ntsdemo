import React, { useEffect, useRef } from "react";
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
          {/* Main Blog Left Section */}
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

          {/* Blog List Right Section */}
          <div className="w-full lg:w-[50%] mr-[1%] text-justify">
            

            {/* Blog Item 2 */}
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


            {/* Blog Item 3 */}
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

            {/* Blog Item 3 */}
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

            {/* Blog Item 4 */}
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

export default BlogListSection;
